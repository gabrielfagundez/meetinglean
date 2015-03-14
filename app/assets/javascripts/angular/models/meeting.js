app.factory('Meeting', ['$resource', function($resource) {
  return $resource('api/meetings/:id', { id: '@id', format: 'json' });
}]);