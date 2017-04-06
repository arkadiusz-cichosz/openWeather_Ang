function requestAPI(cityName, countryCode, myID) {
	$.get('http://api.openweathermap.org/data/2.5/weather?q=' + cityName +',' + countryCode + '&appid=' + myID, 
		function(data) {
			update(data.name, data.main.temp, data.weather[0].icon, data.wind.speed, data.main.humidity, data.main.pressure);
		}
	);	
}
