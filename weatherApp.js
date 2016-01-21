var myApp = angular.module('weatherApp', ['ngRoute', 'ngResource']);

myApp.config(function($routeProvider){
    $routeProvider
    .when('/', {
        templateUrl: 'pages/home.html',
        controller: 'homeController'
    })
    .when('/forecast',{
        templateUrl: 'pages/forecast.html',
        controller: 'forecastController'
          });
});

myApp.service('cityService', function(){
    this.city = "Denver, CO";
});

myApp.controller('homeController', ['$scope', '$log', 'cityService', function($scope, $log, cityService){
    $scope.city = cityService.city;
    $scope.$watch('city', function(){
       cityService.city = $scope.city;
    })
    
}]);
myApp.controller('forecastController', ['$scope', '$resource', '$routeParams', 'cityService', function($scope, $resource, $routeParams, cityService){
     $scope.city = cityService.city;
    $scope.days = $routeParams.days || 2;
    
    $scope.weatherAPI = $resource("http://api.openweathermap.org/data/2.5/forecast/daily?APPID=c1bc7932f09b17782c930d9cfa35788f", { callback: "JSON_CALLBACK" }, { get: { method: "JSONP" }});
    
    $scope.weatherResult = $scope.weatherAPI.get({ q: $scope.city, cnt: $scope.days });
    
    $scope.convertToFahrenheit = function(degK) 
        {
        return Math.round((1.8 * (degK - 273)) + 32);
        }
    
    $scope.convertToDate = function(dt) 
        { 
        return new Date(dt * 1000);
        };
}]);

 