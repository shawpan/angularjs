var myApp = angular.module("myApp",[]);
myApp.factory("Data",function(){
	return {message:"factory data message"};
})
myApp.filter("reverse",function(){
	return function(text){
		return text.split("").reverse().join("");
	}
})
function FirstCtrl ($scope,Data) 
{
	$scope.data = Data;
}
function SecondCtrl($scope,Data)
{
	$scope.data = Data;
	$scope.reversedMessage = function(message)
	{
		return message.split("").reverse().join("");
	}
}