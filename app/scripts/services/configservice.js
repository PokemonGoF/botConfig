'use strict';

/**
 * @ngdoc service
 * @name botConfApp.ConfigService
 * @description
 * # ConfigService
 * Service in the botConfApp.
 */
angular.module('botConfApp')
  .service('ConfigService', ['$http', 'localStorageService', '$timeout', '$q', function ($http, localStorageService, $timeout, $q) {
    var _config;
    return {
      loadConfig: function () {
        localStorageService.isSupported = false;
        if (localStorageService.isSupported) {
          var localConfig = localStorageService.get('config');
          if (localConfig) {
            var deferred = $q.defer();
            _config = localConfig;
            $timeout(function () {
              deferred.resolve(localConfig);
            }, 5);
            return deferred.promise
          } else {
            return this.defaultConfig()
          }
        } else {
          return this.defaultConfig()
        }
      },

      defaultConfig: function () {
        return $http.get('./data/default_config.json').then(function (result) {
          _config = result.data;
          return result.data;
        });
      },

      saveConfig: function(){
        if (localStorageService.isSupported) {
          localStorageService.set('config', _config);
        }
      },
      availableTasks: function(){
        return $http.get('./data/available_tasks.json').then(function (result) {
          return result.data;
        });
      },
      getTasks: function(taskList){
        return _config.tasks;
      },

      setTasks: function(tasks){
        _config.tasks = tasks;
        this.saveConfig();
      },

      getTask: function (taskType, taskList) {
        var _task;
        var _tasks = (taskList) ? taskList : _config.tasks;
        angular.forEach(_tasks, function (task) {
          if (task.type == taskType) {
            _task = task;
          }
        });
        return _task;
      },

      setTaskConfig: function (taskType, config) {
        angular.forEach(_config.tasks, function (task) {
          if (task.type == taskType) {
            task.config = angular.merge(
              task.config,
              config
            );
          }
        });
        this.saveConfig();
      },

      hasTask: function (taskType) {
        var _found = false;
        angular.forEach(_config.tasks, function (task) {
          if (task.type == taskType) {
            _found = true;
          }
        });
        return _found;
      }
    }
  }]);
