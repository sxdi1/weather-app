Weather App - React Project
Overview
This project is a React-based weather application that allows users to search for any city with a population over 100000 and view both the current weather conditions and the 7-day weather forecast. The app fetches data from external APIs (like OpenWeather) to fetch and display information such as temperature, real feel, humidity, cloudiness, wind speed, and more.

Features
City Search: Users can search for cities with a population of over 100000 and view the weather information.
Current Weather: Displays the current temperature, real feel (feels like temperature), humidity, and wind speed for the selected city.
7-Day Weather Forecast: Shows the weather forecast for the next 7 days, including daily temperatures, real feel, and overall weather conditions.
Dynamic UI: The app updates dynamically based on the city selected by the user.

Technologies Used
React: For building the user interface.
OpenWeather API: For fetching weather data (current and forecast).
GeoDB Cities API: For fetching city information
Fetch: For making API requests to fetch weather data.
React-Select-Async-Paginate: For handling the city search with asynchronous pagination.

Note: If using on a local machine, ensure you have the following: 
- Node.js (with npm)
- OpenWeather API key (free to get at https://openweathermap.org/)
- GeoDB API key (free to get at https://rapidapi.com/wirefreethought/api/geodb-cities/)
- create a .env file and add the following code (replace the text after '=' with your own key): REACT_APP_WEATHER_API_KEY=your_openweather_api_key
                                                                                                REACT_APP_RAPIDAPI_KEY=your_geodb_api_key

To run, do the following in terminal:
- copy/clone this repo
- cd weather-app/react-weather-app/
- npm install
- npm start
Project should open at http://localhost:3000 :)
  

