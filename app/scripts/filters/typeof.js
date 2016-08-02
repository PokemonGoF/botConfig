'use strict';

/**
 * @ngdoc filter
 * @name botConfApp.filter:typeof
 * @function
 * @description
 * # typeof
 * Filter in the botConfApp.
 */
angular.module('botConfApp')
  .filter('typeof', function() {
    return function(obj) {
      return typeof obj
    };
  });
