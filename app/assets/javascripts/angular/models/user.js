app.factory('User', ['$http', function($http) {
  return {
    getAccountUsers: function(userId) {
      return $http.get('/api/users/' + userId + '/account_users');
    },
    get: function(userId) {
      return $http.get('/api/users/' + userId);
    },
    create: function(adminUserId, user) {
      return $http.post('/api/users', { admin_user_id: adminUserId, user: user })
    },
    update: function(userId, user) {
      return $http.put('/api/users/' + userId, { user: user })
    },
    delete: function(userId) {
      return $http.delete('/api/users/' + userId)
    },
    acceptTerms: function(){
      return $http.put('/api/users/accept_terms')
    },
    setTimeZone: function(timeZoneOffset){
      return $http.put('/api/users/time_zone', { time_zone_offset: timeZoneOffset })
    }

  }
}]);