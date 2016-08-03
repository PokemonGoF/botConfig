'use strict';

/**
 * @ngdoc function
 * @name botConfApp.controller:MovetofortCtrl
 * @description
 * # MovetofortCtrl
 * Controller of the botConfApp
 */
angular.module('botConfApp')
  .controller('MoveToFortCtrl', ['$scope', 'DataService', 'ConfigService', '$rootScope', function ($scope, DataService, ConfigService, $trootScope) {

    var task = ConfigService.getTask('MoveToFort');

    $scope.taskOptions = task.config;


    $scope.$watch('taskOptions', function (newVal) {

    }, true);
  }]);
