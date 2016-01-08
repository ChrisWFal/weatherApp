var myApp = angular.module('weatherApp', ['ngRoute', 'ngResource']);

myApp.config(function ($routeProvider) {
    $routeProvider

        .when('/', {
        templateUrl: 'pages/home.html',
        controller: 'homeController'


    })

    .when('/forecast', {
        templateUrl: 'pages/forecast.html',
        controller: 'forcastController'


    })


});


myApp.service('cityService', function () {
    this.city = "Denver, CO";


    myApp.controller('homeController', ['$scope', 'cityService',
function ($scope, cityService) {
                $scope.city = cityService.city;

                $scope.$watch('city', function () {
                    cityService.city = $scope.city;

                })
           })
    }]);

myApp.controller('forecastController', ['$scope', 'cityService', function ($scope, cityService) {

$scope.city = cityService.city;
}])


})