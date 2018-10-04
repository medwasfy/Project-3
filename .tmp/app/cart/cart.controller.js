'use strict';

angular.module('buildoutletApp').controller('CartCtrl', function ($scope, Modal, ngCart) {
  $scope.clearCart = Modal.confirm['delete'](function () {
    ngCart.empty();
  });
});
//# sourceMappingURL=cart.controller.js.map
