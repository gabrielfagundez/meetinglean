app.directive('toast', ['TemplatesHelper', function (TemplatesHelper) {

  var messages = {
    genericResponseError: {
      description: 'An error ocurred. Please, try again later.'
    },
    unauthorizedResponseError: {
      description: 'You are not allowed to perform this action.'
    },
    serverDownResponseError: {
      description: 'You are offline.'
    }
  };

  var link = function ($scope, element, attrs) {
    $scope.closeToast = function() {
      element.addClass('u-hide');
    };

    $scope.$on('toast:GenericResponseError', function() {
      $scope.description = messages.genericResponseError.description;
      element.removeClass('u-hide');
    });

    $scope.$on('toast:UnauthorizedResponseError', function() {
      $scope.description = messages.unauthorizedResponseError.description;
      element.removeClass('u-hide');
    });

    $scope.$on('toast:ServerDownResponseError', function() {
      $scope.description = messages.serverDownResponseError.description;
      element.removeClass('u-hide');
    });
  };

  return {
    templateUrl: TemplatesHelper.toastTemplatePath(),
    link: link
  }
}]);