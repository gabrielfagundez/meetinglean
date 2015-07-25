app.controller('ConditionsController', ['$scope', '$rootScope', '$location', 'User', 'TemplatesHelper', 'RoutesHelper', function($scope, $rootScope, $location, User, TemplatesHelper, RoutesHelper) {

  var content = {
    terms:        TemplatesHelper.termsContentTemplatePath(),
    accept_terms: TemplatesHelper.acceptTermsContentTemplatePath(),
    privacy:      TemplatesHelper.privacyContentTemplatePath()
  };

  var page = $location.path().split('/')[1];
  $scope.content = content[page];
  $scope.displaySignOut = page == 'accept_terms';

  $scope.acceptTerms = function(){
    User.acceptTerms()
      .success(function(response) {
        angular.extend($rootScope.user, response.data);
        $location.path(RoutesHelper.root_path())
      })
  }
}]);