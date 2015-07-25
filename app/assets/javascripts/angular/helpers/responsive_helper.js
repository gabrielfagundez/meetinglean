app.factory('ResponsiveHelper', ['$window', function($window) {
  var screenSizeTop = {
    xs: 768,
    sm: 992,
    md: 1200
  };

  var getSize = function(){
    var currentSize = $window.innerWidth;
    if(currentSize < screenSizeTop.xs)
      return 'xs';
    else if(currentSize < screenSizeTop.sm)
      return 'sm';
    else if(currentSize < screenSizeTop.md)
      return 'md';
    else
      return 'lg';
  };

  var getOrientation = function(){
    var width = $window.innerWidth;
    var height = $window.innerHeight;

    return width > height ? 'landscape' : 'portrait';
  };

  var service = {
    getSize: function(){
      return getSize();
    },
    isExtraSmall: function(){
      return getSize() == 'xs'
    },
    isSmall: function(){
      return getSize() == 'sm'
    },
    isMedium: function() {
      return getSize() == 'md'
    },
    isLarge: function() {
      return getSize() == 'lg'
    },
    isLandscape: function(){
      return getOrientation() == 'landscape'
    }
  }
  return service;
}]);