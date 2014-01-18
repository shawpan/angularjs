var myApp = angular.module("myApp",[]);

myApp.factory("Avengers",function(){
	var Avengers = {};
	Avengers.cast = [];
	for (var i = 0; i < 20; i++) {
		Avengers.cast.push({
			name: "name" + i,
			character : "character" + i
		});
	}
	return Avengers;	
})
function AvengersCtrl($scope,Avengers)
{
	$scope.avengers  =Avengers;
}