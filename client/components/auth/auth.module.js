'use strict';

angular.module('buildoutletApp.auth', [
  'buildoutletApp.constants',
  'buildoutletApp.util',
  'ngCookies',
  'ui.router'
])
  .config(function($httpProvider) {
    $httpProvider.interceptors.push('authInterceptor');
  });
