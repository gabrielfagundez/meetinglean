app.directive('pageNav', ['TemplatesHelper', function (TemplatesHelper) {
  return {
    templateUrl: TemplatesHelper.pageNavTemplatePath(),
    scope: {
      active: '@'
    }
  }
}]);