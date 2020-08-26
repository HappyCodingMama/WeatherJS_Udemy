const storage = new Storage();
const weatherLocation = storage.getLocationData();

const weather = new Weather(weatherLocation.city, weatherLocation.state);
const ui = new UI();

document.addEventListener('DOMContentLoaded', getWeather);

document.getElementById('w-change-btn').addEventListener('click', (e) => {
  const city = document.getElementById('city').value;
  const state = document.getElementById('state').value;

  if (city === '' || state === '') {
    alert('Please write city and state!');
  } else {

    weather.changeLocation(city, state);
    storage.setLocationData(city, state);
    getWeather();
    modal.classList.remove("open-modal");
  }
});

function getWeather() {
  weather.getWeather()
    .then(results => {
      ui.paint(results);
      console.log(results);
    })
    .catch(err => console.log(err));
}
