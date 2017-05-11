let openWeather = angular.module('openWeather', []);
openWeather.controller('setLocation', function(){
	$('.location').hide(400);
	let cityName = $('#city').val();
	let countryCode = $('#countryCode').val();
	console.log('User set: ' + cityName + ' ' + countryCode);
	console.log('Edit box is hidden');
	console.log('Send request to OpenWeather');
	requestAPI(cityName, countryCode, myID);
	makeCookie(cityName, countryCode);
});


function setLocation () {
	$('.location').hide(400);
	//$('.location').css('display', 'none');
	let cityName = $('#city').val();
	let countryCode = $('#countryCode').val();
	console.log('User set: ' + cityName + ' ' + countryCode);
	console.log('Edit box is hidden');
	console.log('Send request to OpenWeather');
	requestAPI(cityName, countryCode, myID);
	makeCookie(cityName, countryCode);
	return false;
}

$('#setCity').click(setLocation);
