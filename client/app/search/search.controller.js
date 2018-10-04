'use strict';

angular.module('buildoutletApp')
  .controller('SearchCtrl', ['$scope', '$stateParams', 'products', function($scope, $stateParams, products) {
   
    $scope.products = products;
    console.log($stateParams.category, $stateParams.term);
  }]);
