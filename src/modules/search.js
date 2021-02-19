const searchForm = document.querySelector('[data-search-form]');
const searchInput = document.querySelector('[data-search-input]');
const dataLocation = document.querySelector('[data-weather-location]');

const API_KEY = 'c09966794fa0f3ef1e2d835c3c916ccf';

let address = '';

const initializeSearch = () => {
  searchEvents();
};

const searchEvents = () => {
  searchForm.addEventListener('submit', (e) => {
    e.preventDefault();
    if (searchInput.value === '') return;
    address = searchInput.value;
    searchInput.value = '';
    render();
  });
};

const render = () => {
  dataLocation.textContent = address;
};

export default initializeSearch;
