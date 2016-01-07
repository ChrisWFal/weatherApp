var myApp = angular.module('weatherApp', ['ngRoute', 'ngResource']);

weatherApp.config(function ($routeProvider)) {
    $routeProvider

        .when('/', {
        templateurl: 'pages/home.html',
        controller: 'homeController'


    })


}


myApp.controller('homeController', ['$scope', 'cityService',
function ($scope, cityService) {
        //    $scope.city = cityService.city;
        //    $scope.$watch('city', function(){
        //        cityService.city = $scope.city;
        //   })
}]);

myApp.controller('forecastController', ['$scope'], function ($scope, cityService) {

})

myApp.service('cityService', function () {
    this.city = "Denver, CO";

})