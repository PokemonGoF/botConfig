'use strict';

/**
 * @ngdoc directive
 * @name botConfApp.directive:evolveConfig
 * @description
 * # evolveConfig
 */
angular.module('botConfApp')
  .directive('evolveConfig', function () {
    return {
      templateUrl: './views/partials/tabs/evolve_config.html',
      restrict: 'E',
      scope: {
        config: '=config'
      },
      controller: function ($scope, DataService) {
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
        }, true)
      }
    };
  });
