app.factory('Worker', ['$http', function($http) {
  return {
    getAll: function(workerId) {
      return $http.get('/api/workers/');
    },
    get: function(workerId) {
      return $http.get('/api/workers/' + workerId);
    },
    create: function(worker) {
      return $http.post('/api/workers', { worker: worker })
    },
    update: function(workerId, worker) {
      return $http.put('/api/workers/' + workerId, { worker: worker })
    },
    delete: function(workerId) {
      return $http.delete('/api/workers/' + workerId)
    }

  }
}]);