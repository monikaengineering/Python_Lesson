import React, { useState } from 'react';
import './Card.css';

const WeatherApp = () => {
  return (
    <div className = 'container'>
      <div className = 'top-bar'>
        <input 
        type = 'text'
        className = 'cityInput'
        placeholder='Enter your city'
        />
        <div className='search-icon'>
        </div>
        <div className='weather-image'>
        </div>
        <div className='data-container'>
          <div className='elementr'>
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default WeatherApp ;