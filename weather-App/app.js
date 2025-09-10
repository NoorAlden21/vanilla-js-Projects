const searchBtn = document.querySelector("button");
const input = document.querySelector("input");
const unit = document.querySelector("#unit");
const error = document.querySelector(".error");
const weatherUi = document.querySelector(".weather");

const apiKey = "dd07956977dbbccc849cf9dd6bc050c9";

function getTempSymbol() {
  return unit.value === "metric" ? "°C" : "°F";
}

function getWindSymbol() {
  return unit.value === "metric" ? " m/s" : " mph";
}
async function weather(city = "damascus") {
  error.style.display = "none";
  weatherUi.style.display = "block";
  try {
    const url = `https://api.openweathermap.org/data/2.5/weather?units=${unit.value}&q=${city}`;
    const response = await fetch(url + `&appid=${apiKey}`);
    if (!response.ok) {
      error.style.display = "block";
      weatherUi.style.display = "none";
      return;
    }
    let data = await response.json();
    console.log(data);

    document.querySelector(".city").textContent = data.name;
    document.querySelector(".temp").textContent =
      Math.round(data.main.temp) + getTempSymbol();
    document.querySelector(".humidity").textContent = data.main.humidity + "%";
    document.querySelector(".wind").textContent =
      data.wind.speed + getWindSymbol();
    document.querySelector(
      ".weather-icon"
    ).src = `images/${data.weather[0].main.toLowerCase()}.png`;
  } catch {
    error.style.display = "block";
    weatherUi.style.display = "none";
  }
}

searchBtn.addEventListener("click", () => {
  weather(input.value);
});

unit.addEventListener("change", () => {
  weather(input.value);
});

weather();

input.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    weather(input.value);
  }
});
