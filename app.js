const weather = new Weather('Florida', 'US');
const ui = new UI();

document.addEventListener('DOMContentLoaded', getWeather);

// weather.changeLocation('Florida', 'US');

function getWeather() {
  weather.getWeather()
    .then(results => {
      ui.paint(results);
      console.log(results);
    })
    .catch(err => console.log(err));
}
