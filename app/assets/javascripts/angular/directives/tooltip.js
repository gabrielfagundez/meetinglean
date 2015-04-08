app.directive('tooltip', function() {

  var onHover = function(element) {
    element.tooltip('show');
  };

  var onLeave = function(element) {
    element.tooltip('hide');
  };

  return {
    restrict: 'A',
    link: function(scope, element, attrs) {
      element.hover(function() {
        onHover(element)
      }, function() {
        onLeave(element)
      });
    }
  };

});