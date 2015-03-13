app.directive('meetingTimeline', ['RouteHandler', function(RouteHandler) {

  var defaultAttributes = {
    privateItems: false
  };

  function link(scope, element, attrs){
    var attributes = $.extend({}, defaultAttributes, JSON.parse(attrs.config));
  }

  return {
    link: link,
    scope: true,
    templateUrl: RouteHandler.getMeetingTimelineUrl()
  };
}]);