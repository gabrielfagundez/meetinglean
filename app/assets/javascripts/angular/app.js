var app = angular.module('meetinglean', ['ngRoute', 'ngResource']);


app.config(['$locationProvider', '$httpProvider', function($locationProvider, $httpProvider){
  $locationProvider.html5Mode(true);
  $httpProvider.defaults.headers.common['X-CSRF-Token'] = $('meta[name=csrf-token]').attr('content');
}]);
