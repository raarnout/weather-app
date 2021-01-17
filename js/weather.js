import * as ELEMENTS from "./elements.js";
import Http from "./http.js";
import { WeatherData, WEATER_PROXY_HANDLER } from "./weather-data.js";

const APP_ID = "c7395a93e5c9f2caf9edeb2d2ba2a8e2";
const LOADING_TEXT = ELEMENTS.ELEMENT_LOADING_TEXT;

const search = () => {
		const CITY_NAME = ELEMENTS.ELEMENT_SEARCH_CITY.value.trim();

		if (CITY_NAME.length === 0) {
			return alert("Please enter a city name.");
		}
		
		LOADING_TEXT.style.display = "block";
		const URL = `http://api.openweathermap.org/data/2.5/weather?q=${CITY_NAME}&units=metric&appid=${APP_ID}`;

		Http.fetchData(URL)
			.then((responseData) => {
				const WEATHER_DATA = new WeatherData(
						CITY_NAME,
						responseData.weather[0].description
					),
					WEATHER_PROXY = new Proxy(WEATHER_DATA, WEATER_PROXY_HANDLER);
				WEATHER_PROXY.temperature = responseData.main.temp;
				update(WEATHER_PROXY);
				showContainer(true);
			})
			.catch((error) => alert(error));
	},
	update = (weatherData) => {
		ELEMENTS.ELEMENT_WEATHER_CITY.textContent = weatherData.city;
		ELEMENTS.ELEMENT_WEATHER_DESCRIPTION.textContent = weatherData.description;
        ELEMENTS.ELEMENT_WEATHER_TEMPERATURE.textContent = weatherData.temperature;
        
        LOADING_TEXT.style.display = "none";
	},
	showContainer = (show) => {
		const display = show === true ? "block" : "none";
		ELEMENTS.ELEMENT_WEATHER_CONTAINER.style.display = display;
	};

export { search, showContainer };
