import { ELEMENT_SEARCH_BUTTON, ELEMENT_BODY } from "./elements.js";
import { search as searchWeather, showContainer as showWeather } from "./weather.js";

ELEMENT_SEARCH_BUTTON.addEventListener("click", searchWeather);
ELEMENT_BODY.addEventListener("click", showWeather.bind(false));