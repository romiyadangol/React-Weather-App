import { useEffect, useState } from 'react';
import axios from 'axios';
import ReactAnimatedWeather from "react-animated-weather";

import '../assets/css/forecast.css';

function Forecast({ weather, toDate }) {
  const [forecastData, setForecastData] = useState([]);

  useEffect(() => {
    const fetchForecastData = async () => {
      const apiKey = "a4f791ec3190105377dcfdf1cf72f27d";
      const url = `https://api.openweathermap.org/data/2.5/forecast?q=${weather.city.name}&appid=${apiKey}&units=metric`;
        const response = await axios.get(url);
        setForecastData(response.data);
        console.log(response.data);
      } 
      fetchForecastData();
  }, [weather.city]);

  const convertToFahrenheit = (celsius) => {
    return (celsius * 9/5) + 32;
  };

  const getIconUrl = (iconCode) => {
    return `http://openweathermap.org/img/wn/${iconCode}@2x.png`;
  };

  return (
    <div>
      <div className="city-name">
        <h2>{weather.city.name},<span>{weather.city.country}</span></h2>
      </div>

      <div className="date">
        <span>{toDate()}</span>
      </div>

      <div className="temp">
        <span>
          {weather.list[0].main.temp} <sup>°C</sup> | {convertToFahrenheit(weather.list[0].main.temp).toFixed(2)} <sup>°F</sup>
        </span>
      </div>

      <p>{weather.list[0].weather[0].description}</p>

      <div className="weather-info">
        <div className="col">
        <ReactAnimatedWeather icon="WIND" size="40"/>
            <p>Wind: {weather.list[0].wind.speed} m/s</p>
        </div>

        <div className="col">
        <ReactAnimatedWeather icon="RAIN" size="40"/>
            <p>Humidity: {weather.list[0].main.humidity}%</p>
        </div>
      </div>

      <div className="forecast">
        <h3>5 day Forecast:</h3>
        <div className="forecast-container">
          {forecastData.list && forecastData.list.slice(0,5).map((data, index) => {
            return (
                <div className="forecast-card" key={index}>
                    <img 
                      src={getIconUrl(data.weather[0].icon)} 
                      alt={data.weather[0].description} 
                    />
                    <p>{data.main.temp} <sup>°C</sup></p>
                    <p>{data.weather[0].description}</p>
                </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Forecast;
