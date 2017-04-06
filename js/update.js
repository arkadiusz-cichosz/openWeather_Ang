function update(name, temp, icon, wind, humidity, pressure) {
	$('#temperature').text((temp - 273.15).toFixed(2));
	$('<span><sup>o</sup>C</span>').appendTo('#temperature');
	$('#icon').attr('src', 'http://openweathermap.org/img/w/' + icon + '.png');
	$('#nameOfCity').text(name);
	$('#wind').text(wind);
	$('<span> m/s</span>').appendTo('#wind');
	$('#humidity').text(humidity);
	$('<span> %</span>').appendTo('#humidity');
	$('#pressure').text(pressure);
	$('<span> mb</span>').appendTo('#pressure');
}