'use strict';

/**
 * @ngdoc function
 * @name botConfApp.controller:NavigatorCtrl
 * @description
 * # NavigatorCtrl
 * Controller of the botConfApp
 */
angular.module('botConfApp')
  .controller('NavigatorCtrl',  ['$scope', 'NgMap', function ($scope, NgMap) {
    $scope.marker = null;
    $scope.map_options = {
      center: [-117.38061189651489,
        33.93955043249883]
    };

    var getMap = function (cb) {
      NgMap.getMap().then(function (map) {
        $scope.map = map;
        if (cb) {
          cb(map)
        }
      });
    };
    getMap();


    $scope.mode = 'drag';
    $scope.$on('c',function(){
      console.log('hi');
    })
    $scope.setMode = function (mode) {
      $scope.mode = mode;
      if (mode == 'route') {
        $scope.path = [[]];
      }
    };
    $scope.travelMode = 'WALKING';
    $scope.startPoint = $scope.config.location;
    $scope.start = $scope.config.location;
    $scope.endPoint = '';
    $scope.startPlaceChanged = function () {
      $scope.startPoint = this.getPlace();
      $scope.start = $scope.startPoint.geometry.location.lat() + ", " + $scope.startPoint.geometry.location.lng();
      $scope.map.setCenter($scope.startPoint.geometry.location);
    };
    $scope.endPlaceChanged = function () {
      $scope.endPoint = this.getPlace();
      $scope.end = $scope.endPoint.geometry.location.lat() + ", " + $scope.endPoint.geometry.location.lng();
      $scope.map.setCenter($scope.endPoint.geometry.location);
    };


    $scope.addMarkerAndPath = function (event) {
      if ($scope.mode != 'draw') {
        return;
      }
      if ($scope.path[0] && !$scope.path[0][1]) {
        $scope.path[0] = [event.latLng.lat(), event.latLng.lng()];
      } else {
        $scope.path.push([event.latLng.lat(), event.latLng.lng()]);
      }


    };

    $scope.saveRoute = function (routeType, points) {
      var _route = [];
      if (routeType == 'gmaps') {
        angular.forEach(points, function (point) {
          angular.forEach(point.path, function (p) {
            _route.push({lat: p.lat(), lng: p.lng(), location: p.lat() + ", " + p.lng()});
          })
        });
        console.log(_route)
      }
      if (routeType == 'draw') {
        angular.forEach($scope.path, function (p) {
          _route.push({lat: p[0], lng: p[1], location: p[0] + ", " + p[1]});
        })
      }

      if (_route) {
        $scope.saveToPc(_route, 'path.json');
      }
    };

    $scope.clearPath = function () {
      var _start = $scope.config.location.split(',')
      $scope.path = [_start];
    };
    $scope.clearPath()

  }]);
