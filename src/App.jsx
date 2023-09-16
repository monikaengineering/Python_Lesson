import React from 'react';
import './App.css';
import WeatherApp from './Components/Card/Card';
import InputForm from './Components/InputForm/InputForm';

function App() {
  const Days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  return (
    <div className="App">
        <h1>
          <WeatherApp/>
        </h1>
    </div>
  );
}

export default App;
