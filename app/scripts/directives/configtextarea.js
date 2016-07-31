'use strict';

/**
 * @ngdoc directive
 * @name botConfApp.directive:configTextarea
 * @description
 * # configTextarea
 */
angular.module('botConfApp')
  .directive('configTextarea', function () {
    return {
      restrict: 'A',
      link: function postLink(scope, element, attrs) {
        element.on('click', function () {
          if (!$window.getSelection().toString()) {
            // Required for mobile Safari
            this.setSelectionRange(0, this.value.length);
          }
        });
      }
    };
  });
