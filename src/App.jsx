import React, { useEffect, useState } from 'react';
import axios from 'axios';
import SearchBox from './Components/SearchBox/SearchBox';
import Forecast from './Components/Forecast/Forecast';
import './App.css';

function App() {
  const [query, setQuery] = useState();
  const [weather, setWeather] = useState({
    loading: true,
    data: {},
    error: false
  });
  //const [city, setCity] = useState(null);
  //const [weather, setWeather] = useState({
  //  loading: true,
  //  data: {},
 //   error: false
  //});

  const day = () => {
    const days = [
      'Monday',
      'Tueday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
      'Sunday'
    ];
    const months = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December'
    ];
    const currentDate = new Date()
    const date = `${days[currentDate.getDay()]} ${currentDate.getDate()} ${months[currentDate.getMonth()]}`;
    return date;
  };
  
  const search = async (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      setQuery("");
      setWeather({ ...weather, loading: true });
      const apiKey = "f07386fdaed16171430dc98f1eacd842";
      const url = `api.openweathermap.org/data/2.5/forecast/daily?lat=44.34&lon=10.99&cnt=7&appid=${apiKey}`;
  
      try {
        const response = await axios.get(url);
        const data = response.data;
  
        setWeather({ data, loading: false, error: false });
      } catch (error) {
        setWeather({ ...weather, data: {}, error: true });
        console.log("error", error);
      }
    }
  };
  
  useEffect(() => {
    const fetchData = async () => {
      const apiKey = "f07386fdaed16171430dc98f1eacd842";
      const url = `https://api.openweathermap.org/data/2.5/weather?q=Rabat&appid=${apiKey}`;
  
      try {
        const response = await axios.get(url);
        const data = response.data;
  
        setWeather({ data, loading: false, error: false });
      } catch (error) {
        setWeather({ ...weather, data: {}, error: true });
        console.log("error", error);
      }
    };
  
    fetchData();
  }, []);
  
  return (
    <div className="App">
      <SearchBox query={query} setQuery={setQuery} search={search}/>

      {weather.loading && (
        <>
          <br />
          <br />
          <h4>Searching..</h4>
        </>
      )}

      {weather.error && (
        <>
          <br />
          <br />
          <span className="error-message">
            <span>
              Sorry city not found, please try again.
            </span>
          </span>
        </>
      )}

      {weather && weather.data && weather.data.condition && (
        <Forecast weather={weather} Date={Date} />
        )}

      <h1>Weather app</h1>
    </div>
  );
}

export default App;
