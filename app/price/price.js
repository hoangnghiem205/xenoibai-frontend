'use strict';

angular.module('myApp.price', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/price', {
    templateUrl: 'price/price.html',
    controller: 'PriceCtrl'
  });
}])

.controller('PriceCtrl', [function() {

}]);