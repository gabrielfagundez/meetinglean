app.factory('MeetingOpenIssues', ['$resource', function($resource) {
  return $resource('api/meetings/:meetingId/meeting_open_issues/:id', { meetingId: '@meetingId', id: '@id', format: 'json' }, {
    'update': { method:  'PATCH' }
  });
}]);
