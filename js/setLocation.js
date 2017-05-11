let openWeather = angular.module('openWeather', []);
openWeather.controller('myLocation', function($scope){
	$scope.setLocation =function() {
		$('.location').hide(400);
		//let cityName = $('#city').val();
		//let countryCode = $('#countryCode').val();
		console.log('User set: ' + $scope.nameOfCity + ' ' + $scope.countryCode);
		console.log('Edit box is hidden');
		console.log('Send request to OpenWeather');
		requestAPI($scope.nameOfCity, $scope.countryCode, myID);
		makeCookie($scope.nameOfCity, $scope.countryCode);
	}
	
});



//$('#setCity').click(setLocation);
