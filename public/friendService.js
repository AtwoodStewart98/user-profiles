angular.module("userProfiles").service("friendService", function($http) {
  this.login = function(user) {
    // FIX ME
    return $http.post("/api/login", user).then(function(response) {
      return response;
    });
  };

  this.getFriends = function(user) {
    // FIX ME
    return $http.get("/api/profiles", user).then(function(response) {
      return response;
    });
  };
});
