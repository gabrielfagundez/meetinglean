app.factory('MeetingActionItems', ['$resource', function($resource) {
  return $resource('api/meetings/:meetingId/meeting_action_items/:id', { meetingId: '@meetingId', id: '@id', format: 'json' }, {
    'update': { method:  'PATCH' }
  });
}]);
