'use strict';

angular.module('buildoutletApp').controller('CategoryCtrl', ['$scope', '$stateParams', 'Product', function ($scope, $stateParams, Product) {
  console.log($stateParams);
  $stateParams.slug == 'all' ? Product.query(process($scope)) : Product.catalog({ id: $stateParams.slug, limit: 0 }, process($scope));
}]);

var getAverageRating = function getAverageRating(p) {
  return Math.ceil(_.reduce(p.reviews, function (a, b) {
    return a + b.rating;
  }, 0) / p.reviews.length);
};

var process = function process($scope) {
  return function (prod) {
    $scope.products = _.map(prod, function (rP) {
      return _.extend(rP, { averageRating: getAverageRating(rP) });
    });
    // pagination controls
    $scope.currentPage = 1;
    $scope.totalItems = $scope.products.length;
    $scope.itemsPerPage = 20; // items per page
    $scope.noOfPages = Math.ceil($scope.totalItems / $scope.itemsPerPage);
  };
};
//# sourceMappingURL=category.controller.js.map
