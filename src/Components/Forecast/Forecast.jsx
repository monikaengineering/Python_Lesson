import React, { useEffect, useState } from "react";
import axios from "axios";
import ReactAnimatedWeather from "react-animated-weather";  // a54b1716f864bb78d3e211aba25d0394

function Forecast({ weather }) {
  const { data } = weather;
  const [forecastData, setForecastData] = useState([]);

  useEffect(() => {
    const fetchForecastData = async () => {
      const apiKey = "f07386fdaed16171430dc98f1eacd842";
      const url = `https://api.openweathermap.org/data/2.5/forecast?q=${data.city}&appid=${apiKey}&units=metric`;

      try {
        const response = await axios.get(url);
        setForecastData(response.data.daily);
      } catch (error) {
        console.log("Error fetching forecast data:", error);
      }
    };

    fetchForecastData();
  }, [data.city]);

  const formatDay = (dateString) => {
    const options = { weekday: "short" };
    const date = new Date(dateString * 1000);
    return date.toLocaleDateString("en-US", options);
  };

  const getCurrentDate = () => {
    const options = {
      weekday: "long",
      day: "numeric",
      month: "long",
      year: "numeric"
    };
    const currentDate = new Date().toLocaleDateString("en-US", options);
    return currentDate;

  const renderTemperature = (temperature) => {
    return Math.round(temperature);
  };

  return (
    <div>
      <div className="city-name">
        <h2>
          {data.city}, <span>{data.country}</span>
        </h2>
      </div>
      <div className="date">
        <span>{getCurrentDate()}</span>
      </div>
      <div className="temp">
        {data.condition.icon_url && (
          <img
            src={data.condition.icon_url}
            alt={data.condition.description}
            className="temp-icon"
          />
        )}
        {renderTemperature(data.temperature.current)}°C
      </div>
      <p className="weather-des">{data.condition.description}</p>
      <div className="forecast">
        <h3>5-Day Forecast:</h3>
        <div className="forecast-container">
          {forecastData &&
            forecastData.slice(0, 5).map((day) => (
              <div className="day" key={day.time}>
                <p className="day-name">{formatDay(day.time)}</p>
                {day.condition.icon_url && (
                  <img
                    className="day-icon"
                    src={day.condition.icon_url}
                    alt={day.condition.description}
                  />
                )}
                <p className="day-temperature">
                  {renderTemperature(day.temperature.minimum)}°/ <span>{renderTemperature(day.temperature.maximum)}°C</span>
                </p>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
  }
}

export default Forecast;
