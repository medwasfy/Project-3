'use strict';

angular.module('buildoutletApp').config(function ($stateProvider) {
  $stateProvider.state('orders', {
    url: '/orders',
    templateUrl: 'app/orders/orders.html',
    controller: 'OrdersCtrl',
    authenticate: true
  });
});
//# sourceMappingURL=orders.js.map
