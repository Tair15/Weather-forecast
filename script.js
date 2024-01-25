let Latitude = 51.505;
let Longitude = -0.09;

let map = L.map('map').setView([Latitude, Longitude], 13);

// Tile layer setup
const tiles = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 19,
  attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

const popup = L.popup();

function onMapClick(e) {
  popup
    .setLatLng(e.latlng)

  const latitude = e.latlng.lat.toFixed(2);
  const longitude = e.latlng.lng.toFixed(2);
  toggleVisibility(true);

  showWeather(latitude, longitude);
}

function toggleVisibility(x) {
  var myDiv = document.getElementById("info");

  if (x === true || myDiv.style.display === "") {
    myDiv.style.display = "block";
  } else {
    myDiv.style.display = "none";
  }
}

map.on('click', onMapClick);

function showWeather(latitude, longitude) {
  // let key = '44975be7c13a0bf36e466522e7bafaf7';
  let key = '9829255742697dc164244bcad42df108';

  let url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${key}`;

  fetch(url)
    .then((resp) => {
      if (!resp.ok) throw new Error(resp.statusText);
      return resp.json();
    }).then((data) => {
      console.log(data)
      let rainVolume = 0;
      if (data.rain && data.rain['3h']) {
        rainVolume = data.rain['3h'];
      }
      let Latitude = data.coord.lat;
      let longitude = data.coord.lon;
      document.querySelector('.city').value = data.name;
      document.querySelector('.temperature').innerHTML = `Temperature: ${Math.round(data.main.temp - 273)}°C`
      document.querySelector('.lon').innerHTML = `Longitude: ${data.coord.lon}`;
      document.querySelector('.lat').innerHTML = `Latitude: ${data.coord.lat}`;
      document.querySelector('.feels-like-temp').innerHTML = `Feels like: ${Math.round(data.main.feels_like - 273)}°C`
      document.querySelector('.humidity').innerHTML = `Humidity: ${data.main.humidity}%`;
      document.querySelector('.pressure').innerHTML = `Pressure: ${data.main.pressure} hPa`;;
      document.querySelector('.wind-speed').innerHTML = `Wind Speed: ${(data.wind.speed)} m/s`;
      document.querySelector('.country-code').innerHTML = `Country Code: ${data.sys.country}`;
      document.querySelector('.rain-volume').innerHTML = `Rain Volume (last hour): ${rainVolume} mm`;

    }).catch(console.error);

}

function searchByCity() {
  var cityName = document.querySelector('.city').value;
  let key = '9829255742697dc164244bcad42df108';

  let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${key}`

  fetch(url)
    .then((resp) => {
      if (!resp.ok) throw new Error(resp.statusText);
      return resp.json();
    }).then((data) => {
      console.log(data)
      let rainVolume = 0;
      if (data.rain && data.rain['3h']) {
        rainVolume = data.rain['3h'];
      }

      map.setView([data.coord.lat, data.coord.lon], 10);

      let Latitude = data.coord.lat;
      let longitude = data.coord.lon;

      document.querySelector('.city').value = data.name;
      document.querySelector('.temperature').innerHTML = `Temperature: ${Math.round(data.main.temp - 273)}°C`
      document.querySelector('.lon').innerHTML = `Longitude: ${data.coord.lon}`;
      document.querySelector('.lat').innerHTML = `Latitude: ${data.coord.lat}`;
      document.querySelector('.feels-like-temp').innerHTML = `Feels like: ${Math.round(data.main.feels_like - 273)}°C`
      document.querySelector('.humidity').innerHTML = `Humidity: ${data.main.humidity}%`;
      document.querySelector('.pressure').innerHTML = `Pressure: ${data.main.pressure} hPa`;;
      document.querySelector('.wind-speed').innerHTML = `Wind Speed: ${(data.wind.speed)} m/s`;
      document.querySelector('.country-code').innerHTML = `Country Code: ${data.sys.country}`;
      document.querySelector('.rain-volume').innerHTML = `Rain Volume (last hour): ${rainVolume} mm`;



    }).catch(console.error);
}

async function fun() {
  const url = 'https://fun-facts1.p.rapidapi.com/api/fun-facts';
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '29213011b5msh17845e76bb0fb12p1e4ba5jsnc473aadbd65d',
      'X-RapidAPI-Host': 'fun-facts1.p.rapidapi.com'
    }
  };

  try {
    const response = await fetch(url, options);

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const result = await response.json();

    // Assuming the result is an object with a 'fact' property, adjust accordingly
    const factText = result.fact;

    // Update the funFactInfo div with the fetched fun fact
    const funFactInfoDiv = document.getElementById('funFactInfo');
    funFactInfoDiv.innerHTML = `<p>${factText}</p>`;

  } catch (error) {
    console.error('Error fetching fun fact:', error.message);
  }
}

async function fetchRandomAnimeGif() {
  const url = 'https://any-anime.p.rapidapi.com/v1/anime/gif/1';
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '29213011b5msh17845e76bb0fb12p1e4ba5jsnc473aadbd65d',
      'X-RapidAPI-Host': 'any-anime.p.rapidapi.com'
    }
  };

  try {
    const response = await fetch(url, options);

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const result = await response.json();

    // Assuming the result is an object with an 'images' array, adjust accordingly
    const images = result.images;

    // Display the message
    console.log(result.message);

    // Update the animeGifContainer div with the fetched anime GIF
    const animeGifContainer = document.getElementById('animeGifContainer');
    animeGifContainer.innerHTML = images.map(imageUrl => `<img src="${imageUrl}" alt="Anime GIF">`).join('');

  } catch (error) {
    console.error('Error fetching random anime GIF:', error.message);
  }
}

