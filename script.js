const city = "Warsaw";

let cityHeader = document.getElementById("city");
let weatherImg = document.getElementById("weatherIcon");
let tempText = document.getElementById("currentTemp");
let condition = document.getElementById("condition");
let locationInput = document.getElementById("locationInput");
let searchBtn = document.getElementById("searchBtn");
let timeText = document.getElementById("time");

async function getWeather(city) {
    try {
        const res = await fetch(`https://api.weatherapi.com/v1/current.json?key=YOUR_API_KEY&q=${city}&aqi=no`);
        const data = await res.json();

        console.log(`${data.current.temp_c}°C`);

        cityHeader.textContent = data.location.name;
        tempText.textContent = `${data.current.temp_c}°C`;
        condition.textContent = `${data.current.condition.text}`;
        weatherImg.src = "https:" + data.current.condition.icon;
        timeText.textContent = data.location.localtime;
    } catch (error) {
        console.error("Error: ", error);
    }
}

searchBtn.addEventListener("click", () => {
    const city = locationInput.value.trim();
    if(city !== "") getWeather(city);
});

locationInput.addEventListener("keydown", (e) => {
    if(e.key === "Enter"){
        const city = locationInput.value.trim();
        if(city !== "") getWeather(city);
    }
});


getWeather("Warsaw");