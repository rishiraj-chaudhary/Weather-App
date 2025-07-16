// import { useState } from 'react';
// import InfoBox from "./InfoBox";
// import SearchBox from "./SearchBox";
// export default function WeatherApp(){
//     let[Weather,setWeather]=useState({
//         city:"",
//         temp_c:"",
//         humidity:"",
//         feelLike:"",    
//         weather:""
//     });
//     let updateInfo=(result)=>{
//         setWeather(result);
//     }
//     return(
//         <div style={{textAlign:'center'}}>
//             <h1>Weather App By Delta</h1>
//             <SearchBox updateInfo={updateInfo}/>
//             <InfoBox info={Weather}/>
//         </div>
//     );
// }

import { useState } from 'react';
import InfoBox from "./InfoBox";
import SearchBox from "./SearchBox";
import './WeatherApp.css'; // New CSS file for WeatherApp

export default function WeatherApp() {
    let [Weather, setWeather] = useState({
        city: "",
        temp_c: "",
        humidity: "",
        feelLike: "",
        weather: ""
    });

    let updateInfo = (result) => {
        setWeather(result);
    }

    return (
        <div className="weather-app-container">
            <h1>Weather App By Delta</h1>
            <SearchBox updateInfo={updateInfo} />
            <InfoBox info={Weather} />
        </div>
    );
}