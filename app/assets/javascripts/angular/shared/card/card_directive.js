app.directive('card', ['TemplatesHelper', function (TemplatesHelper) {
  return {
    templateUrl: TemplatesHelper.cardTemplatePath()
  }
}]);