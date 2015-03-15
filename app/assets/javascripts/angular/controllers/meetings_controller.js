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

  $scope.blur = function(event) {
    var element = $(event.target);
    var itemId = element.data().id;

    if(element.hasClass('agenda')) {
      $scope.currentMeeting.agenda = handleItemBlur($scope.currentMeeting.agenda, itemId, element.text().trim());
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