(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))n(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function o(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(t){if(t.ep)return;t.ep=!0;const s=o(t);fetch(t.href,s)}})();const m=new Promise((a,e)=>{navigator.geolocation.getCurrentPosition(a,e)}),f=m.then(g,h);function g(a){const e=a,o=e.coords.latitude,n=e.coords.longitude;return[o,n]}function h(){return[50.088,14.4208]}const p="0f348b83dbe8bc5573a52b603954a9c7";async function $(a){const e=String(a[0]),o=String(a[1]),n=`https://api.openweathermap.org/data/2.5/weather?lat=${e}&lon=${o}&units=metric&appid=${p}`;return await(await fetch(n)).json()}async function w(a){const e=String(a[0]),o=String(a[1]),n=`https://api.openweathermap.org/data/2.5/forecast?lat=${e}&lon=${o}&units=metric&appid=${p}`;return await(await fetch(n)).json()}function y(a,e,o){o.remove();const n=`https://openweathermap.org/img/wn/${e.weather[0].icon}.png`,t=a,s=document.createElement("div");s.classList.add("currentWeather"),s.innerHTML=`
  <p id="location">${e.name}, ${e.sys.country}</p> 
  <img id="actualIcon" src=${n}>
  <p id="description">${e.weather[0].description}</p>
  <div class="temperatureDIV">
    <p id="temperature"><span class="material-symbols-outlined">
    device_thermostat
    </span>${Math.round(e.main.temp)} °C</p> 
    <p id="temperatureMax"><span class="material-symbols-outlined">
    arrow_upward
    </span>${Math.round(e.main.temp_max)} °C</p> 
    <p id="temperatureMin"><span class="material-symbols-outlined">
    arrow_downward
    </span>${Math.round(e.main.temp_min)} °C</p> 
  </div>
  <p id="wind"><span class="material-symbols-outlined">
  air
  </span>${e.wind.speed} km/s</p> 
  <p id="humidity"><span class="material-symbols-outlined">
  humidity_low
  </span>${e.main.humidity} %</p> 
  <p id="pressure">${e.main.pressure} hPa</p> 
  `,t?.appendChild(s)}function L(a,e){const o=a,n=document.createElement("div");n.classList.add("forecast"),o?.appendChild(n),e.list.forEach(function(t,s){const i=t.dt_txt.slice(0,10).split("-"),l=t.dt_txt.slice(11),u=`https://openweathermap.org/img/wn/${t.weather[0].icon}.png`;n.innerHTML=n.innerHTML+`
    <div class="card card${s}">
      <p class="date">${i[2]}.${i[1]}.${i[0]}</p>
      <p class="time">${l}</p>
      <img class="forecastIcon" src=${u}>
      <p class="description">${t.weather[0].description}</p>
      <div class="cardBottom cardBottom${s}">
      </div>
        <p class="temp"><span class="material-symbols-outlined">
        device_thermostat
        </span>${Math.round(t.main.temp)}°C</p>
        <p class="wind"><span class="material-symbols-outlined">
        air
        </span>${Math.round(t.wind.speed)} km/s</p>
      </div>
    `})}const c=document.getElementById("app"),r=document.createElement("p");r.classList.add("loading");r.innerHTML=`<span class="material-symbols-outlined">
hourglass_top
</span>Loading...`;c?.appendChild(r);const d=await f,b=await $(d),v=await w(d);y(c,b,r);L(c,v);
