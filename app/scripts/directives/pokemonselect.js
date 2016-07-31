'use strict';

/**
 * @ngdoc directive
 * @name botConfApp.directive:pokemonSelect
 * @description
 * # pokemonSelect
 */
angular.module('botConfApp')
  .directive('pokemonSelect',['DataService', function (DataService) {
    return {
      templateUrl: './views/partials/pokemon_select.html',
      restrict: 'E',
      scope:{
        action: '&'
      },
      controller: function postLink($scope) {

        $scope.toggleDropdown = function($event) {
          $event.preventDefault();
          $event.stopPropagation();
          $scope.status.isopen = !$scope.status.isopen;
        };

        DataService.pokemonList().then(function (result) {
          $scope.pokemons = result;
        });

        $scope.btnClick = function(selectedPokemon){
          $scope.action({list: $scope.list, pokemon: selectedPokemon });
        }
      }
    };
  }]);
