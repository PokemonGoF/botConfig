'use strict';

/**
 * @ngdoc directive
 * @name botConfApp.directive:releaseTable
 * @description
 * # releaseTable
 */
angular.module('botConfApp')
  .directive('releaseTable', function () {
    return {
      templateUrl: './views/partials/tabs/release_table.html',
      restrict: 'E',
      scope: {
        pokemons: '=pokemons'
      },
      controller: function postLink($scope) {
        $scope.remove = function(key){
          delete $scope.pokemons[key];
        }
      }
    };
  });
