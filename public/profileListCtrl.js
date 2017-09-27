angular
  .module("userProfiles")
  .controller("profileListCtrl", function($scope, friendService) {
    // FIX ME - assign values to $scope.currentUser and $scope.friends
    // $scope.currentUser = friendService.login();
    friendService.getFriends().then(function(res) {
      console.log(res);
      $scope.friends = res.data.friends;
      console.log($scope.friends);
      $scope.currentUser = res.data.currentUser;
    });
  });
