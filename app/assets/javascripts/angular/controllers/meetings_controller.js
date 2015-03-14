app.controller('MeetingsController', ['$scope', 'Meeting',function($scope, Meeting){

  $scope.meetings = Meeting.query();
  $scope.meetingPath = function(meetingId) {
    return '/app/meetings/' + meetingId;
  }

}]);