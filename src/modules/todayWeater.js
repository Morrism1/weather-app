import { getAnimatedIcons, toCelFah } from './utils';

const weatherIcon = document.querySelector('#weatherIcon');
const currentTemp = document.querySelector('[current-temp]');
const feelsLikeTemp = document.querySelector('[feels-like-temp]');
const tempDescription = document.querySelector('[current-description]');

let current;
let unit = 'si';

const Skycons = require('skycons')(window);

const icon = new Skycons({ color: 'white' });

const todayWeather = (newWeather) => {
  current = newWeather;
  const data = current.weather[0];
  console.log(data);
  icon.set(weatherIcon, getAnimatedIcons(data));
  icon.play();
  render();
};

export const setCurrentUnit = (newUnit) => {
  unit = newUnit;
  render();
};

const render = () => {
  console.log(current);
  currentTemp.textContent = `${toCelFah(current.temp, unit)}°`;
  feelsLikeTemp.textContent = `Feels like ${toCelFah(
    current.feels_like,
    unit,
  )}°`;
  tempDescription.textContent = current.weather[0].description;
};

export default todayWeather;
