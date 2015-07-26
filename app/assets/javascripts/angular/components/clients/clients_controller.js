app.controller('ClientsController', ['$scope', 'Client', function($scope, Client) {

  $scope.displayScreen = false;
  $scope.clients = [];

  Client.getAll()
    .success(function(data) {
      $scope.displayScreen = true;
      $scope.clients = data;
    })

}]);