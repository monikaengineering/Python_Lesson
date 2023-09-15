import React from 'react';
import './App.css';
import WeatherApp from './Components/Card/Card';
import InputForm from './Components/InputForm/InputForm';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          <WeatherApp />
          <InputForm />
        </p>
      </header>
    </div>
  );
}

export default App;
