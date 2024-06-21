import { useState, useEffect } from 'react';
import Forecast from './components/Forecast';
import Search from './components/Search';
import axios from 'axios';

import './assets/css/index.css';

function App() {
  const [value, setValue] = useState('');
  const [weather, setWeather] = useState({
    loading: true,
    data: {}
  });

  const toDate = () => {
    const months = [
      "January",
      "February", 
      "March", 
      "April", 
      "May", 
      "June",
      "July", 
      "August", 
      "September", 
      "October", 
      "November", 
      "December"
    ];
    const days = [
      "Sunday", 
      "Monday", 
      "Tuesday", 
      "Wednesday", 
      "Thursday",
      "Friday", 
      "Saturday"
    ];
    const currentDate = new Date();
    const date = `${days[currentDate.getDay()]} ${currentDate.getDate()} ${months[currentDate.getMonth()]} ${currentDate.getFullYear()}`;
    return date;
  }

  const fetchWeather = async (city) => {
    setWeather({ ...weather, loading: true });
    const apiKey = "a4f791ec3190105377dcfdf1cf72f27d";
    const url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`;
      const response = await axios.get(url);
      setWeather({
        loading: false,
        data: response.data
      });
  } 
  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      fetchWeather(value);
      setValue('');
    }
  }

  const handleClick = () => {
    fetchWeather(value);
    setValue('');
  }

  useEffect(() => {
    fetchWeather('Kathmandu');
  }, []);

  return (
    <>
      <div className="app">
      <Search
        placeholder="Enter City Name..."
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onKeyPress={handleKeyPress}
        onClick={handleClick}
      />
      {weather.loading ? <h1>Loading...</h1> : null}
      {weather.data.city ? (
        <Forecast weather={weather.data} toDate={toDate} />
      ) : (
        !weather.loading && <h1>City Not Found</h1>
      )}
      </div>
    </>
  )
}

export default App;
