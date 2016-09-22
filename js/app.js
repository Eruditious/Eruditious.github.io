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
    .when('/ecommerce', {
      templateUrl:'/js/views/ecommerce.html'
    })
    .when('/contact', {
      templateUrl:'/js/views/contact.html'
    })
});
