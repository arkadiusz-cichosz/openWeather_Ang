function changeCity () {
	$('.location').show(400);
	//$('.location').css('display', 'block');
	console.log('Edit box is open');
	return false;
}

$('#changeCity').click(changeCity);
