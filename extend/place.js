const axios = require('axios');

const getPlaceLatLng =  async ( prmAddress ) => {
	const urlEncode = encodeURI(prmAddress);

	const { data: { results, status} } = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${urlEncode}&key=AIzaSyCOWqhE3RfXk7jncAvlJYZeme5bFBlOaTA`);
	if (status === 'ZERO_RESULTS') throw new Error('OOpps direccion no encontrada.');

	const data = results[0];
	const { formatted_address: address, 
	 	  geometry : { location : { lat, lng } }
	 	} = data;

	return { address, lat, lng };
};

module.exports = {
	getPlaceLatLng
}