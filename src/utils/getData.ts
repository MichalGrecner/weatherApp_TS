import { apikey } from "./APIkey";

//https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}

export async function getWeather(location:number[]):Promise<object>{
  const latitude = String(location[0]);
  const longitude = String(location[1]);
  const URL = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=${apikey}`
  const response = await fetch(URL);
  const weatherData = await response.json()
  return weatherData
}

export async function getForecast(location:number[]):Promise<object>{
  const latitude = String(location[0]);
  const longitude = String(location[1]);
  const URL = `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&units=metric&appid=${apikey}`
  const response = await fetch(URL);
  const forecastData = await response.json()
  return forecastData
}

