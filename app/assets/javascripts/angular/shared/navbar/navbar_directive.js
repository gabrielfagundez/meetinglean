app.directive('navbar', ['TemplatesHelper', function (TemplatesHelper) {
  return {
    templateUrl: TemplatesHelper.navbarTemplatePath(),
    scope: {
      active: '@'
    }
  }
}]);