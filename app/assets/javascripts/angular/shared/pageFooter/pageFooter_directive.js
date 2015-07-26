app.directive('pageFooter', ['TemplatesHelper', function (TemplatesHelper) {
  return {
    templateUrl: TemplatesHelper.pageFooterTemplatePath()
  }
}]);