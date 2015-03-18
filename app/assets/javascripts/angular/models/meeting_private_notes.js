app.factory('MeetingPrivateNotes', ['$resource', function($resource) {
  return $resource('api/meetings/:meetingId/meeting_private_notes/:id', { meetingId: '@meetingId', id: '@id', format: 'json' }, {
    'update': { method:  'PATCH' }
  });
}]);
