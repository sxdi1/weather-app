import './App.css';
import Search from './components/search/search';
import CurrentWeather from './components/current-weather/current-weather';
import { weatherAPIkey, weatherAPIurl } from './api';
import { useState } from 'react';
import Forecast from './components/forecast/forecast';

function App() {
  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecast, setForecast] = useState(null);


  const handleOnSearchChange = (searchData) => {
    const [lat, long] = searchData.value.split(" ");
    const roundedLat = parseFloat(lat);
    const roundedLong = parseFloat(long);


    const currentWeatherFetch = fetch(`${weatherAPIurl}/weather?lat=${roundedLat}&lon=${roundedLong}&appid=${weatherAPIkey}&units=metric`);
    const forecastFetch = fetch(`${weatherAPIurl}/forecast?lat=${roundedLat}&lon=${roundedLong}&appid=${weatherAPIkey}&units=metric`);

  //  const currentWeatherFetch = fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${roundedLat}&lon=${roundedLong}&appid=920cca7156a01bbcceaf5b1214821645
   // `);
 //   const forecastFetch = fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${roundedLat}&lon=${roundedLong}&appid=920cca7156a01bbcceaf5b1214821645
   // `);



    Promise.all([currentWeatherFetch, forecastFetch])
    .then(async (response) => {
      const weatherResponse = await response[0].json();
      const forecastResponse = await response[1].json();

      setCurrentWeather({ city: searchData.label, ...weatherResponse});
      setForecast({ city: searchData.label, ...forecastResponse});
    })
    .catch((err) => console.log(err));

  }

  console.log(currentWeather);
  console.log(forecast);


  return (
    <div className="container">
      <Search onSearchChange={handleOnSearchChange}/>
      {currentWeather && <CurrentWeather data={currentWeather} />}
      {forecast && <Forecast data={forecast}/> }
    </div>
  );
}

export default App;
