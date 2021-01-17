import Http from "./http.js";

const APP_ID = "c7395a93e5c9f2caf9edeb2d2ba2a8e2";

const search = (CITY_ELEMENT, event) => {
	const CITY_NAME = CITY_ELEMENT.value.trim();

	if (CITY_NAME.length === 0) {
		return alert("Please enter a city name.");
	}

	const URL = `http://api.openweathermap.org/data/2.5/weather?q=${CITY_NAME}&units=metric&appid=${APP_ID}`;
	Http.fetchData(URL)
		.then((responseData) => {
			console.log(responseData);
		})
		.catch((error) => alert(error));
};

export { search };
