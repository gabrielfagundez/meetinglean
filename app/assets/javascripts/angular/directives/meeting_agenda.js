app.directive('meetingAgenda', ['RouteHelper', function(RouteHelper) {

  var defaultAttributes = {
    privateItems: false
  };

  function link(scope, element, attrs){
    var attributes = $.extend({}, defaultAttributes, JSON.parse(attrs.config));
  }

  return {
    link: link,
    scope: true,
    templateUrl: RouteHelper.getMeetingAgendaUrl()
  };
}]);