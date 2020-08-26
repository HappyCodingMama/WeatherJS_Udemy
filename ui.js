class UI {
  constructor() {
    this.location = document.getElementById('w-location');
    this.desc = document.getElementById('w-desc');
    this.string = document.getElementById('w-string');
    this.details = document.getElementById('w-details');
    this.icon = document.getElementById('w-icon');
    this.humidity = document.getElementById('w-humidity');
    this.feelsLike = document.getElementById('w-feels-like');
    this.wind = document.getElementById('w-wind');
    this.sunTime = document.getElementById('w-sun-time');
  }

  paint(weather) {

    const sunrise = new Date(weather.responseData.sys.sunrise * 1000).toLocaleTimeString("en-US");
    const sunset = new Date(weather.responseData.sys.sunset * 1000).toLocaleTimeString("en-US");
    const weatherIcon = weather.responseData.weather[0].icon;

    this.location.textContent = weather.responseData.name;
    this.desc.textContent = weather.responseData.weather[0].description;
    console.log(this.icon);
    this.string.textContent = `${weather.responseData.main.temp} °C`;
    this.icon.setAttribute('src', `http://openweathermap.org/img/wn/${weatherIcon}.png`);
    // this.icon.setAttribute('src', weather.responseData.weather[0].icon);
    this.humidity.textContent = `Relative Humidity: ${weather.responseData.main.humidity} % `;
    this.feelsLike.textContent = `Feels Like: ${weather.responseData.main.feels_like} °C`;
    this.wind.textContent = `wind: ${weather.responseData.wind.speed} meter / sec`;
    this.sunTime.textContent = `sunrise: ${sunrise} / sunset: ${sunset}`;
  }
}