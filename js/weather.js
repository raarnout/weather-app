const search = (CITY_ELEMENT, event) => {
	const CITY_NAME = CITY_ELEMENT.value.trim();

	if (CITY_NAME.length === 0) {
		return alert("Please enter a city name.");
	}
	alert(CITY_NAME);
};

export { search };
