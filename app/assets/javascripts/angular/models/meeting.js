app.factory('Meeting', ['$resource', function($resource) {
  return $resource('api/meetings', { format: 'json' });
}]);