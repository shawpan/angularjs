var myApp = angular.module("myApp",[]);

myApp.directive("superman1",function(){
	return {
		restrict:"E",
		template:"<div>I am supermanE</div>"
	};
})
myApp.directive("superman2",function(){
	return {
		restrict:"A",
		link:function()
		{
			alert("I am superman A");
		}
	};
})
myApp.directive("superman3",function(){
	return {
		restrict:"C",
		link:function()
		{
			alert("I am superman C");
		}
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