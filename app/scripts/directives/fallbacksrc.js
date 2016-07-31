'use strict';

/**
 * @ngdoc directive
 * @name botConfApp.directive:fallback
 * @description
 * # fallback
 */
angular.module('botConfApp')
  .directive('fallbackSrc', function () {
    var fallbackSrc = {
      link: function postLink(scope, iElement, iAttrs) {
        iElement.bind('error', function() {
          angular.element(this).attr("src", iAttrs.fallbackSrc);
        });
      }
    };
    return fallbackSrc;
  });
