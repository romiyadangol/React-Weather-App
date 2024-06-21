import { useState } from 'react'
import Forecast from './components/Forecast'
import Search from './components/Search'

import { useEffect } from "react"
import axios from 'axios';

function App() {
  const[value,setValue] = useState([]);
  const[weather,setWeather] = useState({
    loading:true,
    data:{}
  })

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
    const date = `${days[currentDate.getDay()]} ${currentDate.getDate()} ${
      months[currentDate.getMonth()]
    }`;
    return date;
    

  }

  const handleClick = async (event) => { 
    if(event.key === "Enter"){
      setValue("");
      setWeather({...weather,loading:true});
      const apiKey = "a4f791ec3190105377dcfdf1cf72f27d";
      const url = `https://api.openweathermap.org/data/2.5/forecast?q=${value}&appid=${apiKey}`;
      await axios.get(url).then((response) => {
        setWeather({
          loading:false,
          data:response.data
        })
      })
  }
}
  useEffect(() => {
    const fetchData = async() => {
      const apiKey = "a4f791ec3190105377dcfdf1cf72f27d";
      const url = `https://api.openweathermap.org/data/2.5/forecast?q=Kathmandu&appid=${apiKey}`;
      const response = await axios.get(url);
      console.log(response);
    }
    fetchData();
  },[]);
  return (
    <>
      <Search 
      placeholder="Enter City Name..."
      value={value}
      onchange={(e) => {
        setValue(e.target.value);
      }}
      onclick={handleClick}
      
      />
      {weather.loading ? <h1>Loading...</h1> : ""}

      {weather.data.city ? (
        <Forecast weather={weather} toDate={toDate}/>
      ) : (
        <h1>City Not Found</h1>
      )
      }
    </>
  )
}

export default App
