// src/api/weather.ts

export const fetchWeather = async (city: string, apiKey: string) => {
  const baseUrl = "https://api.openweathermap.org/data/2.5/weather";
  const url = `${baseUrl}?q=${city}&appid=${apiKey}&units=metric`; // units=metric returns temperature in Celsius
  const response = await fetch(url);
  const data = await response.json();

  return data;
};
