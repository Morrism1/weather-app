import todayWeather from './todayWeater';
import { setForecastWeather } from './forecast';

const searchForm = document.querySelector('[data-search-form]');
const searchInput = document.querySelector('[data-search-input]');
const dataLocation = document.querySelector('[data-weather-location]');

const API_KEY = 'c09966794fa0f3ef1e2d835c3c916ccf';

let address = '';

const removeQuotes = (str) => str.replace(/^"|"$/g, '');
address = removeQuotes('kigali');
const api = removeQuotes(API_KEY);

const render = () => {
  dataLocation.textContent = address.toUpperCase();
};

const getWeatherData = async (lat, lng) => {
  const URL = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lng}&appid=${api}`;
  const data = await fetch(URL);
  const parsedData = await data.json();
  const weather = parsedData.current;
  const dailyForecast = parsedData.daily;
  todayWeather(weather);
  setForecastWeather(dailyForecast);
};

const getCoordinates = async (address) => {
  const URL = `https://api.openweathermap.org/geo/1.0/direct?q=${address}&limit=5&appid=${api}`;
  const getData = await fetch(URL);
  const parsedData = await getData.json();
  const latLong = {
    lat: parsedData[0].lat,
    lng: parsedData[0].lon,
  };

  return latLong;
};

const searchEvents = () => {
  searchForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    if (searchInput.value === '') return;
    address = searchInput.value;
    searchInput.value = '';
    const str = removeQuotes(address);
    const { lat, lng } = await getCoordinates(str);

    getWeatherData(lat, lng);
    render();
  });
};

const initializeSearch = () => {
  searchEvents();
};

export default initializeSearch;
