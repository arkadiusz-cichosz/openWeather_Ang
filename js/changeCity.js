var isHidden = true;
function changeCity () {
	if (isHidden) {
		$('.location').show();
	}
}

$('#changeCity').click(changeCity);