
import "./style.scss"
import { getLocation } from './utils/getLocation'
import {getWeather, getForecast} from "./utils/getData"
import { drawCurrentWeather } from './component/drawCurrentWeather';
import { drawForecast } from './component/drawForecast';


const app = document.getElementById("app")
const loading = document.createElement("p");
loading.classList.add("loading")
loading.innerHTML=`<span class="material-symbols-outlined">
hourglass_top
</span>Loading...`
app?.appendChild(loading)

const location:number[]= await getLocation;
const actualWeather:object = await getWeather(location);
const forecast:object = await getForecast(location);


drawCurrentWeather(app, actualWeather, loading);
drawForecast(app, forecast);
