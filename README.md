🌦️ Weather App by Delta
A beautiful and responsive weather application built with React that lets you search for current weather conditions in any city around the world.

*Features*

Real-time Weather Data: Get current weather information for any city
Beautiful UI: Clean, modern design with Material-UI components
Visual Weather Icons: Dynamic weather icons that change based on conditions
Temperature Display: Shows current temperature and "feels like" temperature
Weather Conditions: Displays humidity levels and weather descriptions
Responsive Design: Works perfectly on desktop and mobile devices
Error Handling: Friendly error messages for invalid city searches

*Live Preview*
Simply type in any city name and get instant weather updates with beautiful visual feedback!
🛠️ Technologies Used

React 19 - Modern React with hooks
Material-UI (MUI) - Beautiful, accessible UI components
WeatherAPI - Real-time weather data
Vite - Fast build tool and development server
CSS3 - Custom styling and animations

*What You'll See*

Search Box: Enter any city name to get weather information
Weather Card: Displays a beautiful card with:

City name with weather-appropriate icons
Current temperature in Celsius
Humidity percentage
"Feels like" temperature
Weather condition description
Dynamic background images based on weather conditions



*Design Features*

Smart Visual Cues:

❄️ Snowflake icon for cold weather (below 15°C)
🌡️ Thermometer icon for warm weather (above 15°C)
⛈️ Storm icon for high humidity/rainy conditions


Dynamic Images: Background images change based on weather conditions
Smooth Animations: Hover effects and transitions for better user experience
Clean Layout: Centered, card-based design that's easy to read

*Setup Instructions*

Clone the repository
bashgit clone [your-repo-url]
cd weather-app

Install dependencies
bashnpm install

Start the development server
bashnpm run dev

Open your browser

Navigate to http://localhost:5173
Start searching for weather in your favorite cities!



*Project Structure*

src/

    ├── WeatherApp.jsx          # Main component managing weather logic and layout

    ├── SearchBox.jsx           # Handles user input for location/city

    ├── InfoBox.jsx             # Displays fetched weather data

    ├── WeatherApp.css          # Styles specific to WeatherApp
 
    ├── SearchBox.css           # Styles for SearchBox

    ├── InfoBox.css             # Styles for InfoBox

    ├── App.jsx                 # Root file, probably rendering

    ├── App.css                 # Main app styles

    └── index.css               # Global styles


*How It Works*

Search: Enter a city name in the search box
Fetch: The app calls the WeatherAPI to get current weather data
Display: Weather information is displayed in a beautiful card format
Visual Feedback: Icons and images change based on weather conditions
Error Handling: If a city isn't found, you'll see a friendly error message

*Future Enhancements*

 5-day weather forecast
 Geolocation support
 Weather alerts and notifications
 Dark/light theme toggle
 Favorite cities list
 Weather history tracking

*Contributing*
Feel free to fork this project and submit pull requests! Some areas where you can contribute:

Add more weather conditions and icons
Improve the mobile responsiveness
Add unit tests
Implement additional weather features
Enhance the UI/UX design

*Notes*

This app uses the WeatherAPI service for weather data
The API key is currently included in the code (consider moving to environment variables for production)
All weather data is fetched in real-time
The app handles various weather conditions and displays appropriate visual feedback

*Enjoy the Weather!*
This weather app is designed to make checking the weather a delightful experience. Whether you're planning your day or just curious about the weather around the world, this app has you covered!
