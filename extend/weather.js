const axios = require('axios');

const APIKEY = '5f83262227df750f8136e3433695cb9e';

const setUnits = (unt) => {
	switch (unt) {
		case 'far': unt = 'imperial'; break;
		case 'cel': unt = 'metric'; break;
		default: unt = null; break;
	}
	return (!unt) ? '' : `&units=${unt}`;
};

const weather = {
	async getWeatherLatLng ({lat, lng, unt}) {
		if (!Number(lat) || !Number(lng)) throw new Error('OOpps latitud o longitud incorrectos');
		const { data : { main } } = await axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}${setUnits(unt)}&appid=${APIKEY}`);
		return main.temp;
	},
	async getWeatherZipCode ({cc, unt}) {
		if (!Number(lat)) throw new Error('OOpps zipcode incorrecto.');
		// zip=${cc},us code and country
		const { data : {main} } = await axios.get(`http://api.openweathermap.org/data/2.5/weather?zip=${cc}${setUnits(unt)}&appid=${APIKEY}`); 
		return main.temp;
	}
};

const {getWeatherLatLng , getWeatherZipCode} = weather;

module.exports = {
	getWeatherLatLng,
	getWeatherZipCode
};
