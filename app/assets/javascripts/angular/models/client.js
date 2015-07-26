app.factory('Client', ['$http', function($http) {
  return {
    getAll: function(clientId) {
      return $http.get('/api/clients/');
    },
    get: function(clientId) {
      return $http.get('/api/clients/' + clientId);
    },
    create: function(client) {
      return $http.post('/api/clients', { client: client })
    },
    update: function(clientId, client) {
      return $http.put('/api/clients/' + clientId, { client: client })
    },
    delete: function(clientId) {
      return $http.delete('/api/clients/' + clientId)
    }

  }
}]);