//feature 1
function displayTemperature(response) {
  let temperatureElement = document.querySelector("#current-temperature");
  let temperature = Math.round(response.data.temperature.current);
  temperatureElement.innerHTML = response.data.temperature.current;
  let cityElement = document.querySelector("#current-city");
  cityElement.innerHTML = response.data.city;
}
function search(event) {
  event.preventDefault();
  let city = searchInputELement.value;
  let searchInputELement = document.querySelector("#search-input");
  let apiKey = "c8c743638tcc20ffb06eb50o53a0604d";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
  axios.get(apiURL).then(displayTemperature);
}
const searchEngine = document.querySelector("#currentCity");
const form = document.querySelector("#myForm");
const h1 = document.querySelector("h1.current-city");
let cityElement = document.querySelector(".current-city");
form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();

  const input = document.querySelector("#inputField");
  const inputValue = input.value;

  h1.textContent = inputValue;
}
//feature 2
function dateTime() {
  let now = new Date();

  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let day = days[now.getDay()];

  let hour = now.getHours();
  let minute = now.getMinutes();

  if (hour < 10) {
    hour = "0" + hour;
  }
  if (minute < 10) {
    minute = "0" + minute;
  }
  let currentDetailsSentence = `${day} ${hour}:${minute}`;
  let currentDetails = document.querySelector("#date");
  currentDetails.innerHTML = currentDetailsSentence;
}
dateTime();
