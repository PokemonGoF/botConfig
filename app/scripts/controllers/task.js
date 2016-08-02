'use strict';

/**
 * @ngdoc function
 * @name botConfApp.controller:TaskCtrl
 * @description
 * # TaskCtrl
 * Controller of the botConfApp
 */
angular.module('botConfApp')
  .controller('TaskCtrl', ['$scope', 'ConfigService', '$location', function ($scope, ConfigService, $location) {

    /**
     * List all available tasks and their default configuration
     * @TODO Link this to the config file?
     */
    $scope.tasks = ConfigService.getTasks();

    ConfigService.availableTasks().then(function(_tasks){
      $scope.availableTasks = _tasks;
    });



    $scope.$watch('tasks', function (tasks) {
      ConfigService.setTasks(tasks);
    }, true);

    $scope.startDrag = function () {

    };

    $scope.addTask = function(task){
      var _task = angular.copy(task);
      $scope.tasks.push(_task);
      if(task.config){
        $location.path('/task-config/'+ task.type);
      }
    };

    $scope.deleteTask = function (index) {
      $scope.tasks.splice(index, 1)
    };

    $scope.editTask = function (task) {

    };

  }]);
