var myApp = angular.module("myApp",[]);

myApp.directive("superman",function(){
	return {
		restrict:"E",
		template:"<div>I am superman</div>"
	};
})
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