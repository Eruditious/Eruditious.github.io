var app = angular.module('MyApp', ['ngRoute']);

app.config(function($routeProvider) {
  $routeProvider

    .when('/', {
      templateUrl : '/js/views/cover.html'
    })

    .when('/home', {
      templateUrl : '/js/views/home.html'
    })

    .when('/contact', {
      templateUrl : '/js/views/contact.html'
      
    })
    .when('/blog', {
      templateUrl : '/js/views/blog.html'
      
    })
    .when('/impossible', {
      templateUrl: '/js/views/impossible.html'
      
    })
    .when('/resume', {
      templateUrl: 'js/views/resume.html'
    })
    .when('/about', {
      templateUrl: 'js/views/about.html'
    });
});

