'use strict';

/**
 * @ngdoc directive
 * @name botConfApp.directive:itemConfig
 * @description
 * # itemConfig
 */
angular.module('botConfApp')
  .directive('itemConfig', function () {
    return {
      templateUrl: './views/partials/tabs/item_config.html',
      restrict: 'E',
      scope: {
        config: '=config'
      },
      controller: function ($scope, DataService) {
        DataService.itemList().then(function (result) {
          $scope.items = result;
        });
        $scope.keepItems = angular.copy($scope.config.item_filter);



        $scope.$watch('keepItems', function(newVal){
          if(newVal){
            $scope.config.item_filter = {};
            var sum = 0;
            angular.forEach(newVal, function(obj, key){
              if(obj.keep){
                var keep = parseInt(obj.keep);
                $scope.config.item_filter[key] = {keep: keep};
                sum = sum + keep;
              }
            });
            $scope.spaceTaken = sum;
          }
        }, true)
      }
    };
  });
