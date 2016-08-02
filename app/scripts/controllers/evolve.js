'use strict';

/**
 * @ngdoc function
 * @name botConfApp.controller:EvolveCtrl
 * @description
 * # EvolveCtrl
 * Controller of the botConfApp
 */
angular.module('botConfApp')
  .controller('EvolveCtrl',  ['$scope', 'DataService', 'ConfigService', function ($scope, DataService, ConfigService) {
    DataService.pokemonList().then(function (result) {
      $scope.pokemons = result;
    });
    $scope.evolveThose = {};

    var evo_conf = ConfigService.getTask('EvolveAll');
    var arr = evo_conf.config.evolve_all.split(',');
    angular.forEach(arr, function(evolvePokemon){
      $scope.evolveThose[evolvePokemon] = true;
    });




    $scope.$watch('evolveThose', function(val){
      if(Object.keys(val).length !== 0 && val.constructor === Object){
        var evolve_all = [];
        angular.forEach(val, function(val, pokemon){
          if(val){
            evolve_all.push(pokemon);
          }
        });

        if(evolve_all.length > 0){
          ConfigService.setTaskConfig('EvolveAll',{
            evolve_all:  evolve_all.join(',')
          })

        } else {
          ConfigService.setTaskConfig('EvolveAll',{
            evolve_all:  'NONE'
          })
        }
      }
    }, true);
  }]);
