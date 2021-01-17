export class WeatherData {
	constructor(city, description) {
        this.city = city;
        this.description = description;
        this.temperature = '';
	}
}

export const WEATER_PROXY_HANDLER = {
	get: function (target, property) {
		return Reflect.get(target, property);
	},
	set: function (target, property, value) {
		const newValue = `${(value * 1.8 + 32).toFixed(2)} F.`;
		return Reflect.set(target, property, newValue);
	},
};
