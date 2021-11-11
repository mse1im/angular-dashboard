let woodgrove = angular.module('woodgrove', ['ngRoute','ngAnimate']);

woodgrove.config(['$routeProvider', function ($routeProvider) {

    $routeProvider
        .when('/home', {
            templateUrl: '/dist/today.html',
        })
        .when('/customer', {
            templateUrl: '/dist/customer.html',
        })
        .when('/transaction', {
            templateUrl: '/dist/transaction.html',
        })
        .when('/profit', {
            templateUrl: '/dist/profit.html',
        }).otherwise({
            redirectTo: '/home'
        });

}]);