import { setCurrentUnit } from './todayWeater';
import { setMultiUnit } from './forecast';

const fahrenheit = document.querySelector('.units__fahrenheit');
const celcius = document.querySelector('.units__celcius');

const bindUnitEvents = () => {
  fahrenheit.addEventListener('click', () => {
    setCurrentUnit('us');
    setMultiUnit('us');
    fahrenheit.classList.add('units__fahrenheit--active');
    celcius.classList.remove('units__celcius--active');
  });
  celcius.addEventListener('click', () => {
    setCurrentUnit('si');
    setMultiUnit('si');
    fahrenheit.classList.remove('units__fahrenheit--active');
    celcius.classList.add('units__celcius--active');
  });
};

export default bindUnitEvents;
