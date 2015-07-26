app.directive('card', ['TemplatesHelper', function (TemplatesHelper) {

  function link(scope, element, attributes) {
    scope.isEmpty = attributes.type == 'empty';
    scope.isStandard = attributes.type == undefined || attributes.type == 'standard';
  }

  return {
    templateUrl: TemplatesHelper.cardTemplatePath(),
    scope: {
      instance: '@'
    },
    link: link
  }
}]);