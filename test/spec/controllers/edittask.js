'use strict';

describe('Controller: EdittaskCtrl', function () {

  // load the controller's module
  beforeEach(module('botConfApp'));

  var EdittaskCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    EdittaskCtrl = $controller('EdittaskCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(EdittaskCtrl.awesomeThings.length).toBe(3);
  });
});
