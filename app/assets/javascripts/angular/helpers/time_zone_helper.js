app.factory('TimeZoneHelper', function() {
  var service = {
    getTimeZoneOffset: function(){
      return -(new Date().getTimezoneOffset() / 60)
    }
  }

  return service;
});