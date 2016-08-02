'use strict';

describe('Controller: TaskCtrl', function () {

  // load the controller's module
  beforeEach(module('botConfApp'));

  var TaskCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    TaskCtrl = $controller('TaskCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(TaskCtrl.awesomeThings.length).toBe(3);
  });
});
