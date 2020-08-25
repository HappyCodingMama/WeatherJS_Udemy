class Weather {
  constructor(city, state) {
    this.apiKey = '7cf971f3205edf94f4ab26b4cf93044a';
    this.city = city;
    this.state = state;
  }

  async getWeather() {
    const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.state}&appid=${this.apiKey}`);

    const responseData = await response.json();

    return responseData.weather;
  }

  changeLocation(city, state) {
    this.city = city;
    this.state = state;
  }
}