app.factory('Meeting', ['$resource', function($resource) {
  return $resource('api/meetings/:meetingId', { meetingId: '@meetingId', format: 'json' }, {
    'update': { method:  'PATCH' }
  });
}]);
