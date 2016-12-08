'use strict';

angular.module('myApp.home', ['ngRoute'])

  .config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/home', {
      templateUrl: 'home/home.html',
      controller: 'HomeCtrl'
    });
  }])

  .controller('HomeCtrl', function ($scope) {
    $scope.showTab1 = true;
    $scope.showTab2 = false;
    $scope.showTab3 = false;

    $scope.showTab = function (index) {
      if (index == 1) {
        $scope.showTab1 = true;
        $scope.showTab2 = false;
        $scope.showTab3 = false;
      }
      else if (index == 2) {
        $scope.showTab1 = false;
        $scope.showTab2 = true;
        $scope.showTab3 = false;
      }
      else {
        $scope.showTab1 = false;
        $scope.showTab2 = false;
        $scope.showTab3 = true;
      }
    }
  });