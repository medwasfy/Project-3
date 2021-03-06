'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var NavbarController =
//end-non-standard

function NavbarController(Auth, Catalog) {
  _classCallCheck(this, NavbarController);

  this.menu = [{
    'title': 'Home',
    'state': 'main'
  }, {
    'title': 'Electronic',
    'state': 'products({"slug": "computers-and-accessories"})'
  }, {
    'title': 'Fashion',
    'state': 'products({"slug": "fashion"})'
  }, {
    'title': 'Featured',
    'state': 'main',
    'featured': [{
      'image': 'assets/img/mega-b-6.jpg',
      'title': 'Jewery & Accessories',
      'state': 'products({"slug": "art-works"})',
      'items': [{
        'title': 'Hats & Gloves',
        'state': 'products.detail({slug: "1"})'
      }, {
        'title': 'Cold-Weather',
        'state': 'products.detail({slug: "1"})'
      }, {
        'title': 'Fur & Faux Fur',
        'state': 'products.detail({slug: "1"})'
      }, {
        'title': 'Wraps,Capes & Vests',
        'state': 'products.detail({slug: "1"})'
      }]
    }, {
      'image': 'assets/img/mega-b-5.jpg',
      'title': 'HANDBAGS',
      'state': 'products({"slug": "women"})',
      'items': [{
        'title': 'Shop All',
        'state': 'products.detail({slug: "1"})'
      }, {
        'title': 'New Arrivals',
        'state': 'products.detail({slug: "1"})'
      }, {
        'title': 'Crossbody Bags',
        'state': 'products.detail({slug: "1"})'
      }, {
        'title': 'Shoulder Bags',
        'state': 'products.detail({slug: "1"})'
      }]
    }, {
      'image': 'assets/img/mega-b-7.jpg',
      'title': 'Shoes',
      'state': 'products({"slug": "men"})',
      'items': [{
        'title': 'Pumps & Slingbacks',
        'state': 'products.detail({slug: "1"})'
      }, {
        'title': 'Evening',
        'state': 'products.detail({slug: "1"})'
      }, {
        'title': 'Oxfords, Loafers',
        'state': 'products.detail({slug: "1"})'
      }, {
        'title': 'Cold Weath',
        'state': 'products.detail({slug: "1"})'
      }]
    }]
  }];
  this.isCollapsed = true;

  this.isLoggedIn = Auth.isLoggedIn;
  this.isAdmin = Auth.isAdmin;
  this.getCurrentUser = Auth.getCurrentUser;

  var self = this;

  Catalog.query(function (categories) {
    self.parentCategories = _.filter(categories, function (category) {
      return category.ancestors.length == 1 && category.slug != 'upsell-products';
    });
  });
};

angular.module('buildoutletApp').controller('NavbarController', NavbarController);

//start-non-standard
//# sourceMappingURL=navbar.controller.js.map
