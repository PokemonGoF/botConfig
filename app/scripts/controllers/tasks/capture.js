'use strict';

/**
 * @ngdoc function
 * @name botConfApp.controller:CatchCtrl
 * @description
 * # CatchCtrl
 * Controller of the botConfApp
 */
angular.module('botConfApp')
  .controller('CaptureCtrl',  ['$scope', function ($scope) {
    $scope.remove = function(key){
      delete $scope.config.catch[key];
    };
    $scope.catch_search = '';

    $scope.addPokemon = function (key, pokemon) {
      console.log(key, pokemon)
      if(!$scope.config[key][pokemon]){
        $scope.config[key][pokemon] = {
          logic: 'or'
        };
      }
    }

  }]);
