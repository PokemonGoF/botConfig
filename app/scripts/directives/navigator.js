'use strict';

/**
 * @ngdoc directive
 * @name botConfApp.directive:navigator
 * @description
 * # navigator
 */
angular.module('botConfApp')
  .directive('navigator', function () {
    return {
      templateUrl: './views/partials/tabs/navigator.html',
      restrict: 'E',
      scope: {
        config: '=config'
      },
      controller: function ($scope, NgMap, $timeout) {
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
        getMap(function(){
          google.maps.event.trigger($scope.map, 'resize');
        });
        var saveToPc = function (data, filename) {

          if (!data) {
            console.error('No data');
            return;
          }

          if (!filename) {
            filename = 'download.json';
          }

          if (typeof data === 'object') {
            data = JSON.stringify(data, undefined, 2);
          }

          var blob = new Blob([data], {type: 'text/json'});

          // FOR IE:

          if (window.navigator && window.navigator.msSaveOrOpenBlob) {
            window.navigator.msSaveOrOpenBlob(blob, filename);
          }
          else {
            var e = document.createEvent('MouseEvents'),
              a = document.createElement('a');

            a.download = filename;
            a.href = window.URL.createObjectURL(blob);
            a.dataset.downloadurl = ['text/json', a.download, a.href].join(':');
            e.initEvent('click', true, false, window,
              0, 0, 0, 0, 0, false, false, false, false, 0, null);
            a.dispatchEvent(e);
          }
        };

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
        $scope.startPoint = '';
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

        $scope.path = [];
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
            saveToPc(_route, 'path.json');
          }
        };

        $scope.clearPath = function () {
          $scope.path = [[]];
        };


      }
    };
  });
