const getAnimatedIcons = (weatherIcon) => {
  if (weatherIcon.icon === 'Wind') {
    return 'wind';
  }
  if (weatherIcon.main === 'Snow') {
    return 'snow';
  }
  if (weatherIcon.main === 'Rain' || weatherIcon.main === 'Thunderstorms') {
    return 'rain';
  }
  if (weatherIcon.icon === '02d') {
    return 'partly_cloudy_day';
  }
  if (weatherIcon.icon === '02n') {
    return 'partly_cloudy_night';
  }
  if (weatherIcon.icon === '50d') {
    return 'fog';
  }
  if (
    weatherIcon.main === 'Clouds'
    || weatherIcon.main === 'Haze'
    || weatherIcon.main === 'Mist'
  ) {
    return 'cloudy';
  }
  if (weatherIcon.icon === '01n' || weatherIcon.icon === '50n') {
    return 'clear_night';
  }
  if (weatherIcon.icon === '01d') {
    return 'clear_day';
  }
  return 'clear_day';
};

const kelToCelcius = (temp) => temp - 273.15;

const kelToFahrenheit = (temp) => temp * (9 / 5) - 459.67;

const toCelFah = (temp, unit) => {
  if (unit === 'us') {
    return Math.round(kelToFahrenheit(temp));
  }
  return Math.round(kelToCelcius(temp));
};

export { getAnimatedIcons, toCelFah };
