'use strict';

/**
 * @ngdoc function
 * @name botConfApp.controller:IncubateeggsCtrl
 * @description
 * # IncubateeggsCtrl
 * Controller of the botConfApp
 */
angular.module('botConfApp')
  .controller('IncubateEggsCtrl', ['$scope', 'DataService', 'ConfigService', '$rootScope', function ($scope, DataService, ConfigService, $trootScope) {

    var task = ConfigService.getTask('IncubateEggs');

    $scope.taskOptions = task.config;


    $scope.$watch('taskOptions', function (newVal) {

    }, true);
  }]);
