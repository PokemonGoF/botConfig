'use strict';

/**
 * @ngdoc directive
 * @name botConfApp.directive:generalConfig
 * @description
 * # generalConfig
 */
angular.module('botConfApp')
  .directive('generalConfig', function () {
    return {
      templateUrl: './views/partials/tabs/general_config.html',
      restrict: 'E',
      scope: {
        config: '=config'
      },
      controller: function ($scope, NgMap) {
        $scope.marker = null;
        $scope.map_options = {
          center: [-117.38061189651489,
            33.93955043249883]
        };


        $scope.marker = {};
        $scope.placeMarker = function (event) {
          $scope.marker = {lat: event.latLng.lat(), lng: event.latLng.lng()};
          $scope.setCoords(event);
        };

        $scope.setCoords = function (event) {

          if(event.latLng){
            $scope.config.location = event.latLng.lat() + ',' + event.latLng.lng();
          }
        };

        NgMap.getMap().then(function (map) {
          $scope.map = map;
        });
      }
    };
  });
