// import Button from '@mui/material/Button';
// import TextField from '@mui/material/TextField';
// import * as React from 'react';
// import { useState } from 'react';
// import './SearchBox.css';
// export default function SearchBox({updateInfo}){
//     const API_URL='https://api.weatherapi.com/v1/current.json';
//     const API_KEY='aa0e82af81464ad18cf91651252103';
//     let[City,setCity]=useState("");
//     let[Error,setError]=useState(false);
//     let handleChange=(event)=>{
//         setCity(event.target.value);
//     }
//     let handleSubmit=async (event)=>{
//         try{
//             event.preventDefault();
//             setCity("");
//             let info=await getWeatherInfo();
//             updateInfo(info);
//         }catch(err){
//             setError(true);
//         }
//     }
//     let getWeatherInfo= async ()=>{
//         try{
//             let response=await fetch(`${API_URL}?key=${API_KEY}&q=${City}`);
//             let json_res=await response.json();
//             if (response.status !== 200 || json_res.error) {
//                 throw new Error(json_res.error?.message || "Invalid location");
//             }
//             console.log(json_res);
//             let result={
//                 city:City,
//                 temp_c:json_res.current.temp_c,
//                 humidity:json_res.current.humidity,
//                 feelLike:json_res.current.feelslike_c,
//                 weather:json_res.current.condition.text
//             }
//             return result;
//         }catch(err){
//             setError(true);
//             return { city: "", temp_c: "", humidity: "", feelLike: "", weather: "" }; 
//         }
//     }
    
//     return (
//         <div className='searchbox'>
//             <h3>Search for the weather</h3>
//             <hr></hr>
//             <form onSubmit={handleSubmit}>
//                 <TextField onChange={handleChange} value={City} required id="outlined-basic" label="Search City" variant="outlined" /><br></br>
//                 <Button type='submit'>Search</Button>
//                 {Error && <p>No such place could be found</p>}
//             </form>
//         </div>

//     );
// }

import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useState } from 'react';
import './SearchBox.css';

export default function SearchBox({ updateInfo }) {
    const API_URL = 'https://api.weatherapi.com/v1/current.json';
    const API_KEY = 'aa0e82af81464ad18cf91651252103'; // Consider moving this to an environment variable for security

    let [city, setCity] = useState("");
    let [error, setError] = useState(false);

    let handleChange = (event) => {
        setCity(event.target.value);
    }

    let handleSubmit = async (event) => {
        try {
            event.preventDefault();
            setError(false); // Reset error on new submission
            let info = await getWeatherInfo();
            updateInfo(info);
            setCity(""); // Clear input after successful search
        } catch (err) {
            setError(true);
            setCity(""); // Clear input on error as well
            updateInfo({ city: "", temp_c: "", humidity: "", feelLike: "", weather: "" }); // Clear info box on error
        }
    }

    let getWeatherInfo = async () => {
        try {
            let response = await fetch(`${API_URL}?key=${API_KEY}&q=${city}`);
            let json_res = await response.json();

            if (response.status !== 200 || json_res.error) {
                throw new Error(json_res.error?.message || "Invalid location");
            }

            console.log(json_res);
            let result = {
                city: json_res.location.name, // Use actual city name from API
                temp_c: json_res.current.temp_c,
                humidity: json_res.current.humidity,
                feelLike: json_res.current.feelslike_c,
                weather: json_res.current.condition.text,
                icon: json_res.current.condition.icon // Added weather icon from API
            }
            return result;
        } catch (err) {
            setError(true);
            throw err; // Re-throw to be caught by handleSubmit
        }
    }

    return (
        <div className='searchbox'>
            <h3>Search for the Weather</h3>
            <hr />
            <form onSubmit={handleSubmit}>
                <TextField
                    onChange={handleChange}
                    value={city}
                    required
                    id="outlined-basic"
                    label="Search City"
                    variant="outlined"
                    fullWidth // Makes the text field take full width
                    margin="normal" // Adds vertical spacing
                />
                <Button
                    type='submit'
                    variant="contained" // Filled button style
                    color="primary" // Material UI primary color
                    sx={{ mt: 2 }} // Margin top for spacing
                >
                    Search
                </Button>
                {error && <p className="error-message">No such place could be found</p>}
            </form>
        </div>
    );
}