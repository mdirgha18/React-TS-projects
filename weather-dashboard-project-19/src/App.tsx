// src/App.tsx

import React, { useState, useEffect } from "react";
import { fetchWeather } from "./api/weather"; // Import the fetchWeather function
import "./styles.css";

const App = () => {
  const [weather, setWeather] = useState<any>(null);
  const [city, setCity] = useState<string>("London"); // Set default city
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        const apiKey = "191566b27879c228c05b6d29feb98afa"; // CodeSandbox will recognize the environment variable
        if (!apiKey) {
          setError("API key is missing");
          return;
        }

        const data = await fetchWeather(city, apiKey);

        // Check if weather data exists and if it's in the expected structure
        if (data && data.weather && data.weather.length > 0) {
          setWeather(data);
          setError(null); // Clear previous errors
        } else {
          setError("Weather data not found");
        }
      } catch (err) {
        setError("Failed to fetch weather data");
      }
    };

    fetchWeatherData();
  }, [city]);

  const handleCityChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCity(event.target.value);
  };

  return (
    <div>
      <h1>Weather App</h1>

      <input
        type="text"
        value={city}
        onChange={handleCityChange}
        placeholder="Enter city name"
      />
      {error && <p>{error}</p>}
      {weather && (
        <div>
          <h2>{weather.name}</h2>
          {/* Safely access weather data */}
          {weather.weather && weather.weather[0] && (
            <>
              <p>{weather.weather[0].description}</p>
              <p>{weather.main.temp}°C</p>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default App;
