function makeCookie(cityName, countryCode) {
	document.cookie = 'cityName=' + cityName;
	document.cookie = 'countryCode=' + countryCode;
	console.log('Created cookies: ' + document.cookie);
}

function readCookie() {
	let cookies = document.cookie;
	cookies = cookies.split(';');
	for (let i = 0; i < cookies.length; i++) {
		cookies[i] = cookies[i].split('=');
	}
	let cookiesData = {cityName: cookies[0][1], countryCode: cookies[1][1]};
	console.log('Cookies data read out');
	return cookiesData;
}

function widgetInit() {
	let cookies = document.cookie;
	if (cookies.length == 0) {
		makeCookie('London', 'UK');
	}
}
