'use strict';

/**
 * @ngdoc function
 * @name botConfApp.controller:EvolveCtrl
 * @description
 * # EvolveCtrl
 * Controller of the botConfApp
 */
angular.module('botConfApp')
  .controller('EvolveCtrl',  ['$scope', 'DataService', function ($scope, DataService) {
    $scope.evolveThose = {};
    DataService.pokemonList().then(function (result) {
      $scope.pokemons = result;
    });

    $scope.$watch('evolveThose', function(val){
      if(val){
        var evolve_all = [];
        angular.forEach(val, function(val, pokemon){
          if(val){
            evolve_all.push(pokemon);
          }
        });

        if(evolve_all){
          $scope.config.evolve_all = evolve_all.join(',');
        } else {
          $scope.config.evolve_all = 'NONE';
        }
      }
    }, true);
  }]);
