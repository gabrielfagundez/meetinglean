app.controller('MeetingsController', ['$scope', '$route', '$timeout', '$routeParams', 'Meeting', 'MeetingAgenda', function($scope, $route, $timeout, $routeParams, Meeting, MeetingAgenda) {

  var delayTime = 0;

  $scope.meetings = Meeting.query();
  $scope.currentMeeting = Meeting.get({ meetingId: 1, format: 'json' });

  $scope.meetingPath = function(meetingId) {
    return '/app/meetings/' + meetingId;
  };

  $scope.itemClass = function(item, prefix) {
    return item.done ? prefix + ' done ' + item.id : item.id + ' ' + prefix
  };
  
  $scope.addMeetingAgenda = function() {
    $scope.currentMeeting.meeting_agendas.push({
      description: '',
      meeting_id: 1
    });
    $timeout(function() {
      $('.agenda .item-list .item').last().focus()
    }, delayTime)
  };
  
  $scope.addPrivateNote = function() {
    $scope.currentMeeting.private_notes.push({
      description: '',
      meeting_id: 1
    });
    $timeout(function() {
      $('.private_notes .item-list .item').last().focus();
    }, delayTime)
  };

  $scope.addSummary = function() {
    $scope.currentMeeting.summary.push({
      description: '',
      meeting_id: 1
    });
    $timeout(function() {
      $('.summary .item-list .item').last().focus()
    }, delayTime)
  };

  $scope.addMeetingDecision = function() {
    $scope.currentMeeting.meeting_decisions.push({
      description: '',
      meeting_id: 1
    });
    $timeout(function() {
      $('.meeting_decisions .item-list .item').last().focus()
    }, delayTime)
  };

  $scope.addMeetingActionItem = function() {
    $scope.currentMeeting.meeting_action_items.push({
      description: '',
      meeting_id: 1
    });
    $timeout(function() {
      $('.meeting_action_items .item-list .item').last().focus()
    }, delayTime)
  };

  $scope.addMeetingOpenIssue = function() {
    $scope.currentMeeting.meeting_open_issues.push({
      description: '',
      meeting_id: 1
    });
    $timeout(function() {
      $('.meeting_open_issues .item-list .item').last().focus()
    }, delayTime)
  };


  $scope.blur = function(event) {
    var element = $(event.target);
    var itemId = element.data().id;
    var text = element.text().trim();

    if(element.hasClass('agenda')) {
      handleItemBlur(MeetingAgenda, itemId, text);
    } else if(element.hasClass('summary')) {
      $scope.currentMeeting.summary = handleItemBlur($scope.currentMeeting.summary, itemId, text);
    } else if(element.hasClass('meeting_decisions')) {
      $scope.currentMeeting.meeting_decisions = handleItemBlur($scope.currentMeeting.meeting_decisions, itemId, text);
    } else if(element.hasClass('meeting_action_items')) {
      $scope.currentMeeting.meeting_action_items = handleItemBlur($scope.currentMeeting.meeting_action_items, itemId, text);
    } else if(element.hasClass('meeting_open_issues')) {
      $scope.currentMeeting.meeting_open_issues = handleItemBlur($scope.currentMeeting.meeting_open_issues, itemId, text);
    } else {
      $scope.currentMeeting.private_notes = handleItemBlur($scope.currentMeeting.private_notes, itemId, text);
    }
  };

  $scope.startMeetingPath = function(currentMeeting) {
    return '/app/meetings/' + currentMeeting.id + '/start'
  };

  function handleItemBlur(model, itemId, text) {
    if(itemId == '') {
      model.save(
        { meetingId: $scope.currentMeeting.id, format: 'json' },
        { description: text }
      )
    } else {
      model.update(
        { meetingId: $scope.currentMeeting.id, id: itemId, format: 'json' },
        { meeting_agenda: { description: text, meeting_id: $scope.currentMeeting.id }}
      )
    }
  }

}]);