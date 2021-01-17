import * as ELEMENTS from "./elements.js";
import { search as searchWeather } from "./weather.js";

ELEMENTS.ELEMENT_SEARCH_BUTTON.addEventListener(
	"click",
	searchWeather.bind(this, ELEMENTS.ELEMENT_SEARCH_CITY)
);
