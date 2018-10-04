'use strict';

angular.module('buildoutletApp').controller('ProductCtrl', ['$scope', '$stateParams', '$state', 'Product', function ($scope, $stateParams, $state, Product) {
  // Upsell Products
  Product.catalog({ id: 'upsell-products', limit: 6 }, function (upsellProducts) {
    $scope.upsellProducts = _.map(upsellProducts, function (upsellProduct) {
      return _.extend(upsellProduct, { averageRating: getAverageRating(upsellProduct) });
    });
  });

  //Get product and fetch related products based on category
  $scope.product = Product.get({ id: $stateParams.id }, function (p) {
    $scope.product.averageRating = getAverageRating(p);
    Product.catalog({ id: p.categories[0].slug, limit: 6 }, function (relatedProducts) {
      $scope.relatedProducts = _.filter(_.map(relatedProducts, function (relatedProduct) {
        return _.extend(relatedProduct, { averageRating: getAverageRating(relatedProduct) });
      }), function (rp) {
        return rp._id != p._id;
      });
    });
  });

  $scope.addReview = function (review, productId) {
    Product.review({ id: productId }, review, function (resp) {
      $scope.product.reviews.push(resp);
      $scope.review = { rating: 5 };
      $scope.message = "Review added successfully";
    }, function (err) {
      console.log(err);
      $scope.message = "An error occured!";
    });
  };
}]);

var getAverageRating = function getAverageRating(p) {
  return Math.ceil(_.reduce(p.reviews, function (a, b) {
    return a + b.rating;
  }, 0) / p.reviews.length);
};
//# sourceMappingURL=product.controller.js.map
