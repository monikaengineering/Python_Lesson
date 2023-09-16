import React, { useState } from 'react';
import './App.css';
import { useEffect } from 'react';
import axios from 'axios';
import WeatherApp from './Components/Card/Card';
import InputForm from './Components/InputForm/InputForm';

function App() {
  const Days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  const [data, setData] = useState({
    celcius: 10,
    name: 'London',
    humidity: 10,
    speed: 2,
  });
  
  const [city, setName] = useState();

  useEffect(() => {
    const response = async () => {
      const url = 'https://api.openweathermap.org/data/2.5/weather?q=Battambang&appid=a54b1716f864bb78d3e211aba25d0394';
      const response = await axios.get(url);
    }
    response();
  },[]);

  return (
    <div className="App">
        <h1>
          
        </h1>
    </div>
  );
}

export default App;
