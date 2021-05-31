const { getPlaceLatLng } = require('./extend/place');
const { getWeatherLatLng } = require('./extend/weather');

const yarg = require('yargs');
	yarg.options({
	  	address:{
	  		alias:'a',
	  		desc:'Direccion a buscar',
	  		demand:true
	  	},
	  	/*zipcode:{
	  		alias:'z',
	  		desc:'(Opcional) Codigo Postal',
	  		default:''
	  	},*/
	  	units:{
	  		alias:'u',
	  		desc:'(Opcional) Unidad de clima ',
	  		default:'kel'
	  	}
	 }).argv;
// </pre>
const getInfo = async ({address, units}) => {
	try {
		const place = await getPlaceLatLng(address);
		const weather = await getWeatherLatLng({...place, unt: units});
		
		return `El clima de la direccion ${place.address.toUpperCase()} es de ${weather}`;  
	} catch(e) {
		return `No se pudo encontrar la direccion ${address} ingresada -- ${e}`;  
	}
};

getInfo(yarg.argv).then((res) => console.log(res))
				.catch((err) => console.log(err));


