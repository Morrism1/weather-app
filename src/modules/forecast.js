import { getAnimatedIcons, toCelFah } from './utils';

const futureWeather = document.querySelector('.future-weather');
const forecastTemplate = document.querySelector('[data-forecast-template]');

let forecastArray = [];
let unit = 'si';

const Skycons = require('skycons')(window);

const icon = new Skycons({ color: 'white' });

const setForecastWeather = (newForecastArray) => {
  forecastArray = [...newForecastArray];
  clearList(futureWeather);
  render();
};

const clearList = (list) => {
  while (list.firstChild) {
    list.removeChild(list.firstChild);
  }
};

const setMultiUnit = (newUnit) => {
  unit = newUnit;
  clearList(futureWeather);
  render();
};

const getDayOfWeek = (dayIndex) => {
  const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  return days[dayIndex];
};

const render = () => {
  console.log(forecastArray);

  for (let i = 1; i < 8; i++) {
    const highTemp = forecastArray[i].temp.max;
    const lowTemp = forecastArray[i].temp.min;
    const currentDayIndex = new Date(forecastArray[i].dt * 1000).getDay();
    const forecastList = document.importNode(forecastTemplate.content, true);
    const forecastDay = forecastList.querySelector('[forecast-day]');
    const forecastIcon = forecastList.querySelector('#weatherIcon');
    const forecastDesc = forecastList.querySelector('[forecast-weather-desc]');
    const forecastHighTemp = forecastList.querySelector('[forecast-high]');
    const forecastLowTemp = forecastList.querySelector('[forecast-low]');

    forecastDay.textContent = `${getDayOfWeek(currentDayIndex)}`;
    forecastHighTemp.textContent = `High ${toCelFah(highTemp, unit)}°`;
    forecastLowTemp.textContent = `Low ${toCelFah(lowTemp, unit)}°`;
    forecastDesc.textContent = `${forecastArray[i].weather[0].description}`;
    icon.set(forecastIcon, getAnimatedIcons(forecastArray[i].weather[0]));
    icon.play();

    futureWeather.appendChild(forecastList);
  }
};

export { setForecastWeather, setMultiUnit };
