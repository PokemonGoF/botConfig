'use strict';

/**
 * @ngdoc directive
 * @name botConfApp.directive:catchTable
 * @description
 * # catchTable
 */
angular.module('botConfApp')
  .directive('catchTable', function () {
    return {
      templateUrl: './views/partials/tabs/catch_table.html',
      restrict: 'E',
      scope:{
          pokemons: '=pokemons'
      },
      controller: function postLink($scope) {
        $scope.remove = function(key){
          delete $scope.pokemons[key];
        }
      }
    };
  });
