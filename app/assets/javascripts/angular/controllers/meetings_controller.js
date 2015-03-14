app.controller('MeetingsController', ['$scope', '$route', '$routeParams', 'Meeting',function($scope, $route, $routeParams, Meeting){

  $scope.meetings = Meeting.query();
  $scope.currentMeeting = Meeting.get({ meetingId: 1, format: 'json' });

  $scope.meetingPath = function(meetingId) {
    return '/app/meetings/' + meetingId;
  };


}]);