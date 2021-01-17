import { ELEMENT_SEARCH_BUTTON } from "./elements.js";
import { search as searchWeather } from "./weather.js";

ELEMENT_SEARCH_BUTTON.addEventListener("click", searchWeather);
