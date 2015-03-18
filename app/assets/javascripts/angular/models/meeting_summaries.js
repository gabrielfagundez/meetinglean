app.factory('MeetingSummaries', ['$resource', function($resource) {
  return $resource('api/meetings/:meetingId/meeting_summaries/:id', { meetingId: '@meetingId', id: '@id', format: 'json' }, {
    'update': { method:  'PATCH' }
  });
}]);
