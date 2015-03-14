app.controller('MainController', ['$scope', '$route', '$location', function($scope, $route, $location) {

  $scope.$on('$routeChangeSuccess', function(){
    $scope.template = $route.current.templateUrl;
  });

}]);