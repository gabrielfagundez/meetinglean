app.factory('HttpInterceptorHelper', ['$q', '$rootScope', function ($q, $rootScope) {
  return {
    responseError: function (rejection) {

      switch(rejection.status) {
        case 0:
          $rootScope.$broadcast('toast:ServerDownResponseError');
          break;
        case 401:
          $rootScope.$broadcast('toast:UnauthorizedResponseError');
          break;
        case 500:
          $rootScope.$broadcast('toast:GenericResponseError');
          break;
      }

      return $q.reject(rejection);
    }
  };
}]);