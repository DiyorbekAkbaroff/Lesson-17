const searchInput = document.getElementById("searchInput");
const searchBtn = document.getElementById("searchBtn");
const cityName = document.getElementById("cityName");
const temperature = document.getElementById("temperature");
const condition = document.getElementById("condition");
const weatherIcon = document.getElementById("weatherIcon");

const API_KEY = "efc5cb2692msh03cb48ac9da6823p1eb78ejsn742a9ac20d06";

async function getWeather(city = "Samarqand") {
    const url = `https://weatherapi-com.p.rapidapi.com/forecast.json?q=${city}&days=1`;

    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': API_KEY,
            'x-rapidapi-host': 'weatherapi-com.p.rapidapi.com'
        }
    };

    try {
        const response = await fetch(url, options);
        const data = await response.json();
        return data;
    } catch (err) {
        console.error("Xatolik:", err);
    }
}

function displayWeather(data) {
    cityName.textContent = `Shahar: ${data.location.name}`;
    temperature.textContent = `Harorat: ${data.current.temp_c}°C`;
    condition.textContent = data.current.condition.text;
    weatherIcon.src = data.current.condition.icon;
    weatherIcon.style.display = "block";
}

searchBtn.addEventListener("click", async () => {
    const city = searchInput.value.trim() || "Samarqand";
    const data = await getWeather(city);
    if (data) displayWeather(data);
});

getWeather().then(data => {
    if (data) displayWeather(data);
});
