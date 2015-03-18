app.factory('MeetingDecisions', ['$resource', function($resource) {
  return $resource('api/meetings/:meetingId/meeting_decisions/:id', { meetingId: '@meetingId', id: '@id', format: 'json' }, {
    'update': { method:  'PATCH' }
  });
}]);
