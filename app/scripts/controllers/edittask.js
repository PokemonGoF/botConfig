'use strict';

/**
 * @ngdoc function
 * @name botConfApp.controller:EdittaskCtrl
 * @description
 * # EdittaskCtrl
 * Controller of the botConfApp
 */
angular.module('botConfApp')
  .controller('EditTaskCtrl', ['$scope', 'ConfigService', '$routeParams', function ($scope, ConfigService, $routeParams) {
    ConfigService.availableTasks().then(function (_tasks) {
      console.log(ConfigService.getTask($routeParams.task, _tasks));
      $scope.task_options = ConfigService.getTask($routeParams.task, _tasks).config;
    });

    var ignoredTasks = ['RecycleItems', 'EvolveAll', 'TransferPokemon', 'CatchVisiblePokemon', 'CatchLuredPokemon', 'FollowPath'];
    $scope.use_ng_include = false;
    if(ignoredTasks.indexOf($routeParams.task) == -1){
      $scope.task_config = ConfigService.getTask($routeParams.task).config;
    } else {
      $scope.use_ng_include = true;
      var task = $routeParams.task;
      var file;
      switch (task){
        case "FollowPath":
          file = 'navigator.html';
          break;

        case "EvolveAll":
          file = 'evolve_config.html';
          break;

        case "TransferPokemon":
          file = 'release_config.html';
          break;

        case "CatchVisiblePokemon":
        case "CatchLuredPokemon":
          file = 'capture_config.html';
          break;

        default:
          file = task +'.html'

      }
      console.log(file)
      $scope.include_src = './views/tasks/'+ file;
    }
  }]);
