var myApp = angular.module('weatherApp', []);


myApp.controller('homeController', ['$scope', 'cityService'
function($scope, cityService){
    $scope.city = cityService.city;
    $scope.$watch('city', function(){
        cityService.city = $scope.city;
    })
}]);

myApp.service('cityService', function(){
    this.city = "Denver, CO";

})
