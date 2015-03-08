var app = angular.module('meetinglean', ['ngRoute', 'ngResource']);

app.config(['$locationProvider', function($locationProvider){
  $locationProvider.html5Mode(true)
}]);