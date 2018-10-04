'use strict';

angular.module('buildoutletApp').controller('SidebarAccountCtrl', ['$scope', 'Auth', function ($scope, Auth) {
  $scope.isAdmin = Auth.hasRole('admin');
  $scope.isLoggedIn = Auth.isLoggedIn();
}]);
//# sourceMappingURL=sidebar-account.controller.js.map
