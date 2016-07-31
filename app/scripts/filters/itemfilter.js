'use strict';

/**
 * @ngdoc filter
 * @name botConfApp.filter:itemFilter
 * @function
 * @description
 * # itemFilter
 * Filter in the botConfApp.
 */
angular.module('botConfApp')
  .filter('itemfilter', function () {
    return function (items, searchFor) {
      var result = {};
      if(searchFor){
        angular.forEach(items, function(value, key){
          if(value.toString().toLowerCase().indexOf(searchFor.toString().toLowerCase()) !== -1){
            result[key] = value;
          }
        });
        return result;
      } else {
        return items;
      }
    };
  });
