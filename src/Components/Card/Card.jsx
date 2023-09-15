import React, { useState } from 'react';

const WeatherApp = () => {
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState();

  const fetchData = async () => {
    try {
      const respone = await axios.get(
        let api = 'a54b1716f864bb78d3e211aba25d0394';
        
      )
    }
  }
  return (
    <div className = 'container'>
      <div className = 'top-bar'>
        <input 
        type = 'text'
        className = 'cityInput'
        placeholder='Enter your city'
        />
        <div className='search-icon'>
          <img src = {search_icon} alt = '' />
        </div>
        <div className='weather-image'>
          <img src = {cloudy} alt = '' />
        </div>
        <div className='weather-temp'>24℃</div>
        <div className='weather-location'>London</div> 
        <div className='data-container'>
          <div className='element'>
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default WeatherApp ;