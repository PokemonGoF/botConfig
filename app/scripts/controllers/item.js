'use strict';

/**
 * @ngdoc function
 * @name botConfApp.controller:ItemCtrl
 * @description
 * # ItemCtrl
 * Controller of the botConfApp
 */
angular.module('botConfApp')
  .controller('ItemCtrl',  ['$scope', 'DataService', 'ConfigService', '$rootScope', function ($scope, DataService, ConfigService, $trootScope) {
    DataService.itemList().then(function (result) {
      $scope.items = result;
    });

    var task = ConfigService.getTask('RecycleItems');

    $scope.keepItems = task.config.item_filter;

    $scope.$watch('keepItems', function(newVal){
      if(newVal){
        $scope.config.item_filter = {};
        var sum = 0;
        angular.forEach(newVal, function(obj, key){
          if(obj.keep){
            var keep = parseInt(obj.keep);
            ConfigService.setTaskConfig('RecycleItems',{
              item_filter: $scope.keepItems
            });
            sum = sum + keep;
          }
        });
        $scope.spaceTaken = sum;
      }
    }, true);
  }]);
