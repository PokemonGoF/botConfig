'use strict';

/**
 * @ngdoc overview
 * @name botConfApp
 * @description
 * # botConfApp
 *
 * Main module of the application.
 */
angular
  .module('botConfApp', [
    'xeditable',
    'ui.bootstrap',
    'ngMap',
    'ngRoute',
    'LocalStorageModule',
    'ui.sortable'
  ]).config(function($routeProvider, $locationProvider) {
  $routeProvider
    .when('/', {
      templateUrl: './views/general_config.html',
      controller: 'GeneralCtrl'
    })
    .when('/task-config', {
      templateUrl: './views/manage_tasks.html',
      controller: 'TaskCtrl'
    })
    /*.when('/item-config', {
      templateUrl: './views/item_config.html',
      controller: 'ItemCtrl'
    })
    .when('/evolve-config', {
      templateUrl: './views/evolve_config.html',
      controller: 'EvolveCtrl'
    })
    .when('/capture-config', {
      templateUrl: './views/capture_config.html',
      controller: 'CaptureCtrl'
    })
    .when('/release-config', {
      templateUrl: './views/release_config.html',
      controller: 'ReleaseCtrl'
    })
    .when('/navigator', {
      templateUrl: './views/navigator.html',
      controller: 'NavigatorCtrl'
    })*/
    .when('/get-config', {
      templateUrl: './views/get_config.html',
      controller: 'GetConfigCtrl'
    });
}).run(function(editableOptions) {
  editableOptions.theme = 'bs3';
});