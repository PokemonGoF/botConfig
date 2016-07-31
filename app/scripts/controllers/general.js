'use strict';

/**
 * @ngdoc function
 * @name botConfApp.controller:GeneralctrlCtrl
 * @description
 * # GeneralctrlCtrl
 * Controller of the botConfApp
 */
angular.module('botConfApp')
  .controller('GeneralCtrl',['$scope', 'NgMap', function ($scope, NgMap) {
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
  }]);
