app.factory('MeetingAgenda', ['$resource', function($resource) {
  return $resource('api/meetings/:meetingId/meeting_agendas/:id', { meetingId: '@meetingId', id: '@id', format: 'json' }, {
    'update': { method:  'PATCH' }
  });
}]);
