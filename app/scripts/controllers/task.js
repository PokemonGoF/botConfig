'use strict';

/**
 * @ngdoc function
 * @name botConfApp.controller:TaskCtrl
 * @description
 * # TaskCtrl
 * Controller of the botConfApp
 */
angular.module('botConfApp')
  .controller('TaskCtrl',['$scope', function ($scope) {

    /**
     * List all available tasks and their default configuration
     * @TODO Link this to the config file?
     */
    $scope.availableTasks = {
      'CatchLuredPokemon': {},
      'CatchVisiblePokemon': {},
      'EvolveAll': {},
      'FollowPath': {},
      'FollowSpiral': {},
      'FollowCluster': {},
      'HandleSoftBan': {},
      'IncubateEggs': {},
      'MoveToFort': {},
      'NicknamePokemon': {},
      'RecycleItems': {},
      'SpinFort': {},
      'TransferPokemon': {}
    };

    $scope.startDrag = function(){

    };
    $scope.endDrag = function(){

    };


    $scope.deleteTask = function(task){
      console.log('Deleting task: ', task)
    };

    $scope.editTask = function(task){
      console.log('Edit task: ', task)
    };

  }]);
