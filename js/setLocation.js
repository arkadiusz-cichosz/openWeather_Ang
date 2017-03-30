function setLocation () {
	$('.location').hide(400);
	//$('.location').css('display', 'none');
	console.log('Edit box is hidden');
	return false;
}

$('#setCity').click(setLocation);