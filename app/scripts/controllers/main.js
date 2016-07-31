'use strict';

/**
 * @ngdoc function
 * @name botConfApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the botConfApp
 */
angular.module('botConfApp')
  .controller('MainCtrl', ['$scope', 'DataService', '$location', '$anchorScroll',  function ($scope, DataService, $location, $anchorScroll) {
    $location.hash('general_conf');
    DataService.defaultConfig().then(function (result) {
      $scope.config = result;
    });

    /**
     * @TODO Save config
     * @TODO IMPORT config
     */


    $scope.onMapOverlayCompleted = function(){
      $scope.showDrawControl = true;

      $scope.toggleDrawControl = function() {
        $scope.showDrawControl = !$scope.showDrawControl;
        $scope.map.mapDrawingManager[0].setOptions({drawingControl:$scope.showDrawControl})
      };

      $scope.onMapOverlayCompleted = function() {
        console.log("onMapOverlayCompleted()");
      };
    }





    $scope.addPokemon = function (key, pokemon) {
      if(!$scope.config[key][pokemon]){
        $scope.config[key][pokemon] = {

        };
      }

      $location.hash(key+ '_' + pokemon);

      // call $anchorScroll()

      console.log($scope.config[key]);
    }

  }]);
