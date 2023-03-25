
export function drawForecast(root:any, weather:any){
  const app = root;
  const forecastDiv = document.createElement("div");
  forecastDiv.classList.add("forecast")
  app?.appendChild(forecastDiv)

  //goes through list of each forecast element
  weather.list.forEach(function (day:any, i:number){
    const date:number[] = day.dt_txt.slice(0,10).split("-")
    const time:number = day.dt_txt.slice(11)
    const imgSource = `https://openweathermap.org/img/wn/${day.weather[0].icon}.png`

    forecastDiv.innerHTML = forecastDiv.innerHTML + `
    <div class="card card${i}">
      <p class="date">${date[2]}.${date[1]}.${date[0]}</p>
      <p class="time">${time}</p>
      <img class="forecastIcon" src=${imgSource}>
      <p class="description">${day.weather[0].description}</p>
      <div class="cardBottom cardBottom${i}">
      </div>
        <p class="temp"><span class="material-symbols-outlined">
        device_thermostat
        </span>${Math.round(day.main.temp)}°C</p>
        <p class="wind"><span class="material-symbols-outlined">
        air
        </span>${Math.round(day.wind.speed)} km/s</p>
      </div>
    ` 
  });

}
