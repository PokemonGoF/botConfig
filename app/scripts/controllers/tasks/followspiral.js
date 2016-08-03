'use strict';

/**
 * @ngdoc function
 * @name botConfApp.controller:FollowspiralCtrl
 * @description
 * # FollowspiralCtrl
 * Controller of the botConfApp
 */
angular.module('botConfApp')
  .controller('FollowSpiralCtrl', ['$scope', 'DataService', 'ConfigService', '$rootScope', function ($scope, DataService, ConfigService, $trootScope) {

    var task = ConfigService.getTask('FollowSpiral');

    $scope.taskOptions = task.config;


    $scope.$watch('taskOptions', function (newVal) {

    }, true);
  }]);
