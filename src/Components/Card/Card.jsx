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
      </div>
    </div>
  );
}

export default WeatherApp ;