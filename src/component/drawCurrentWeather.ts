

// function createLineCurrent (id, innerText){
//   const parent = document.querySelector(".currentWeather")
//   const p = document.getElementById(id);
//   p.innerHTML=innerText;
// }


export function drawCurrentWeather(root:any, weather:any, loading:any){
  loading.remove()
  const iconURL = `https://openweathermap.org/img/wn/${weather.weather[0].icon}.png`
  const app = root;
  const currWeather = document.createElement("div");
  currWeather.classList.add("currentWeather");
  currWeather.innerHTML=`
  <p id="location">${weather.name}, ${weather.sys.country}</p> 
  <img id="actualIcon" src=${iconURL}>
  <p id="description">${weather.weather[0].description}</p>
  <div class="temperatureDIV">
    <p id="temperature"><span class="material-symbols-outlined">
    device_thermostat
    </span>${Math.round(weather.main.temp)} °C</p> 
    <p id="temperatureMax"><span class="material-symbols-outlined">
    arrow_upward
    </span>${Math.round(weather.main.temp_max)} °C</p> 
    <p id="temperatureMin"><span class="material-symbols-outlined">
    arrow_downward
    </span>${Math.round(weather.main.temp_min)} °C</p> 
  </div>
  <p id="wind"><span class="material-symbols-outlined">
  air
  </span>${weather.wind.speed} km/s</p> 
  <p id="humidity"><span class="material-symbols-outlined">
  humidity_low
  </span>${weather.main.humidity} %</p> 
  <p id="pressure">${weather.main.pressure} hPa</p> 
  `
app?.appendChild(currWeather)







  //_________________




  // const DOMlocation = document.getElementById("location");
  // DOMlocation.innerText=weather.name + ", " + weather.sys.country;


  // createLineCurrent("description",weather.weather[0].description);

  // const currentIcon = document.getElementById("actualIcon");
  // currentIcon.src=`https://openweathermap.org/img/wn/${weather.weather[0].icon}.png`;

  // createLineCurrent("temperature", `<span class="material-symbols-outlined">
  // device_thermostat
  // </span>${weather.main.temp} °C`)
  // createLineCurrent("temperatureMax", `<span class="material-symbols-outlined">
  // arrow_upward
  // </span>${weather.main.temp_max} °C`)
  // createLineCurrent("temperatureMin", `<span class="material-symbols-outlined">
  // arrow_downward
  // </span>${weather.main.temp_min} °C`)
  // createLineCurrent("humidity", `<span class="material-symbols-outlined">
  // humidity_low
  // </span>${weather.main.humidity} %`)
  // createLineCurrent("pressure", `${weather.main.pressure} hPa`)
  // createLineCurrent("wind", `<span class="material-symbols-outlined">
  // air
  // </span>${weather.wind.speed} km/s`)
}
