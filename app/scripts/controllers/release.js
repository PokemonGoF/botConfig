'use strict';

/**
 * @ngdoc function
 * @name botConfApp.controller:ReleaseCtrl
 * @description
 * # ReleaseCtrl
 * Controller of the botConfApp
 */
angular.module('botConfApp')
  .controller('ReleaseCtrl', ['$scope', function ($scope) {
    $scope.remove = function(key){
      delete $scope.config.release[key];
    };
    $scope.catch_search = '';

    $scope.addPokemon = function (key, pokemon) {
      console.log(key, pokemon)
      if(!$scope.config[key][pokemon]){
        $scope.config[key][pokemon] = {
        };
      }
    }
  }]);