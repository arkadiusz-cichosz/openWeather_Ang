let myID = '77d4971436d26f540fd4b63a95bfb825';
widgetInit();
let openweatherData = readCookie();
requestAPI(openweatherData.cityName, openweatherData.countryCode, myID);
setInterval(function() {
	let openweatherData = readCookie();
	requestAPI(openweatherData.cityName, openweatherData.countryCode, myID);
	console.log('Data is updated');
},180000);

