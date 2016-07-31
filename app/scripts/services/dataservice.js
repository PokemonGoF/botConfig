'use strict';

/**
 * @ngdoc service
 * @name botConfApp.DataService
 * @description
 * # DataService
 * Service in the botConfApp.
 */
angular.module('botConfApp')
    .service('DataService', ['$http', function ($http) {
        return {
            pokemonList: function () {
                return $http.get('./data/pokemon.json').then(function (result) {
                    return result.data;
                });
            },
            itemList: function () {
                return $http.get('./data/items.json').then(function (result) {
                    return result.data;
                });
            },
            defaultConfig: function () {
                return $http.get('./data/default_config.json').then(function (result) {
                    return result.data;
                });
            }
        }
    }]);
