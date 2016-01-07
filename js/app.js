var app = angular.module('MyApp', ['ngRoute']);

app.config(function($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl : '/js/views/home.html'
    })
    .when('/home', {
      templateUrl : '/js/views/home.html'
    })
    .when('/portfolio', {
      templateUrl: '/js/views/portfolio.html'
    })
        
});
