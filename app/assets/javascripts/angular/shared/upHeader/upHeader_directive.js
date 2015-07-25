app.directive('upHeader', ['TemplatesHelper', function (TemplatesHelper) {
  return {
    templateUrl: TemplatesHelper.upHeaderTemplatePath(),
    scope: {
      title: '@'
    }
  }
}]);