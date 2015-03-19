app.controller('MeetingsController', ['$scope', '$route', '$timeout', '$location', '$routeParams', 'RouteHandler', 'Meeting', 'MeetingActionItems', 'MeetingAgenda', 'MeetingDecisions', 'MeetingOpenIssues', 'MeetingPrivateNotes', 'MeetingSummaries', function($scope, $route, $timeout, $location, $routeParams, RouteHandler, Meeting, MeetingActionItems, MeetingAgenda, MeetingDecisions, MeetingOpenIssues, MeetingPrivateNotes, MeetingSummaries) {

  var delayTime = 0;

  $scope.$on('$routeChangeSuccess', function(){
    $scope.meeting = null;
    $scope.meetings = Meeting.query();
  });

  $scope.meetings = Meeting.query();
  $scope.meeting = null;
  $scope.currentMeeting = function() {
    if($scope.meeting != null) {
      return $scope.meeting
    } else {
      if($routeParams.id != null) {
        $scope.meeting = Meeting.get({ meetingId: $routeParams.id, format: 'json' });
        return $scope.meeting;
      }
    }
  };

  $scope.meetingPath = function(meetingId) {
    return '/app/meetings/' + meetingId;
  };

  $scope.itemClass = function(item, prefix) {
    return item.done ? prefix + ' done ' + item.id : item.id + ' ' + prefix
  };

  $scope.addItem = function(scope) {
    $scope.currentMeeting()[scope].push({
      description: '',
      meeting_id: 1
    });

    $timeout(function() {
      $('.' + scope + ' .item-list .item').last().focus()
    }, delayTime)
  };

  $scope.blur = function(event) {
    var element = $(event.target);
    var itemId = element.data().id;
    var text = element.text().trim();

    if(element.hasClass('agenda')) {
      handleItemBlur(MeetingAgenda, itemId, text, element);
    } else if(element.hasClass('summary')) {
      handleItemBlur(MeetingSummaries, itemId, text, element);
    } else if(element.hasClass('meeting_decisions')) {
      handleItemBlur(MeetingDecisions, itemId, text, element);
    } else if(element.hasClass('meeting_action_items')) {
      handleItemBlur(MeetingActionItems, itemId, text, element);
    } else if(element.hasClass('meeting_open_issues')) {
      handleItemBlur(MeetingOpenIssues, itemId, text, element);
    } else {
      handleItemBlur(MeetingPrivateNotes, itemId, text, element);
    }
  };

  $scope.startMeeting = function() {
    Meeting.update(
      { meetingId: $scope.currentMeeting().id, format: 'json' },
      { started: true }, function(data) {
    });
  };

  $scope.meetingStatusTemplateUrl = function() {
    return RouteHandler.meetingStatusTemplateUrl($scope.currentMeeting)
  };

  $scope.newMeeting = function() {
    Meeting.save(function(data) {
      $location.url('/app/meetings/' + data.id)
    })
  };

  function handleItemBlur(model, itemId, text, element) {
    if(itemId == undefined || itemId == '' || itemId == null) {
      if(text != '') {
        model.save(
          { meetingId: $scope.currentMeeting().id, format: 'json' },
          { description: text },
          function(data) { element.attr('data-id', data.id) }
        )
      }
    } else {
      model.update(
        { meetingId: $scope.currentMeeting().id, id: itemId, format: 'json' },
        { description: text, meeting_id: $scope.currentMeeting().id }
      )
    }
  }

}]);