'use strict';

/**
 * @ngdoc filter
 * @name botConfApp.filter:keyfilter
 * @function
 * @description
 * # keyfilter
 * Filter in the botConfApp.
 */
angular.module('botConfApp')
  .filter('keyfilter', function () {
    return function (items, searchFor) {
      var result = {};
      if(searchFor){
        angular.forEach(items, function(value, key){
          if(key.toString().toLowerCase().indexOf(searchFor.toString().toLowerCase()) !== -1){
            result[key] = value;
          }
        });
        return result;
      } else {
        return items;
      }
    };
  });
