let myID = '77d4971436d26f540fd4b63a95bfb825';

function setLocation () {
	$('.location').hide(400);
	//$('.location').css('display', 'none');
	let cityName = $('#city').val();
	let countryCode = $('#countryCode').val();
	console.log('User set: ' + cityName + ' ' + countryCode);
	console.log('Edit box is hidden');
	return false;
}

$('#setCity').click(setLocation);