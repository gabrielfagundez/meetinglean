app.controller('MeetingsController', ['$scope', '$route', '$timeout', '$routeParams', 'Meeting',function($scope, $route, $timeout, $routeParams, Meeting){

  var delayTime = 0;

  $scope.meetings = Meeting.query();
  $scope.currentMeeting = Meeting.get({ meetingId: 1, format: 'json' });

  $scope.meetingPath = function(meetingId) {
    return '/app/meetings/' + meetingId;
  };

  $scope.itemClass = function(item, prefix) {
    return item.done ? prefix + ' done ' + item.id : item.id + ' ' + prefix
  };
  
  $scope.addAgenda = function() {
    $scope.currentMeeting.agenda.push({
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

    if(element.hasClass('agenda')) {
      $scope.currentMeeting.agenda = handleItemBlur($scope.currentMeeting.agenda, itemId, element.text().trim());
    } else if(element.hasClass('summary')) {
      $scope.currentMeeting.summary = handleItemBlur($scope.currentMeeting.summary, itemId, element.text().trim());
    } else if(element.hasClass('meeting_decisions')) {
      $scope.currentMeeting.meeting_decisions = handleItemBlur($scope.currentMeeting.meeting_decisions, itemId, element.text().trim());
    } else if(element.hasClass('meeting_action_items')) {
      $scope.currentMeeting.meeting_action_items = handleItemBlur($scope.currentMeeting.meeting_action_items, itemId, element.text().trim());
    } else if(element.hasClass('meeting_open_issues')) {
      $scope.currentMeeting.meeting_open_issues = handleItemBlur($scope.currentMeeting.meeting_open_issues, itemId, element.text().trim());
    } else {
      $scope.currentMeeting.private_notes = handleItemBlur($scope.currentMeeting.private_notes, itemId, element.text().trim());
    }
  };

  $scope.startMeetingPath = function(currentMeeting) {
    return '/app/meetings/' + currentMeeting.id + '/start'
  };

  function handleItemBlur(itemList, itemId, text) {
    var newItemList = [];

    var found = false;
    $.each(itemList, function(index, value) {
      if(String(itemId) != String(value.id)) {
        if(value.description != '') {
          newItemList.push(value);
        }
      } else {
        if(text != '') {
          value.description = text;
          newItemList.push(value)
          found = true;
        }
      }
    });

    if(!found) {
      if(text != '') {
        newItemList.push({
          description: text
        })
      }
    }

    return newItemList;
  }

}]);