const elSearch = document.querySelector(".js-search");
const elCity = document.querySelector(".js-city");
const elCel = document.querySelector(".js-celsius");
const elCon = document.querySelector(".js-condition");
const elImg = document.querySelector(".js-img");
const elBtn = document.querySelector(".js-btn");

const getWeatherInfo = async (location = "samarqand") => {
    const url = `https://weatherapi-com.p.rapidapi.com/forecast.json?q=${location}&days=1`;
    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': 'efc5cb2692msh03cb48ac9da6823p1eb78ejsn742a9ac20d06',
            'x-rapidapi-host': 'weatherapi-com.p.rapidapi.com'
        }
    };

    try {
        const response = await fetch(url, options);
        const result = await response.json();

        return result;
    } catch (error) {
        console.error(error);
    }
}
const renderPage = (city) => {
    elCity.textContent = city.location.name;
    elCon.textContent = city.current.condition.text;
    elCel.textContent = "celsius: " + city.current.temp_c
}
getWeatherInfo().then(data => renderPage(data));

elBtn.addEventListener("click", (evt) => {
    const val = elSearch.value != "" ? elSearch.value : undefined;
    getWeatherInfo(val).then(city => renderPage(city))
});