app.factory('User', ['$http', function($http) {
  return {
    getAll: function(userId) {
      return $http.get('/api/users/');
    },
    get: function(userId) {
      return $http.get('/api/users/' + userId);
    },
    create: function(user) {
      return $http.post('/api/users', { user: user })
    },
    update: function(userId, user) {
      return $http.put('/api/users/' + userId, { user: user })
    },
    delete: function(userId) {
      return $http.delete('/api/users/' + userId)
    }

  }
}]);