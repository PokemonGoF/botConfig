'use strict';

describe('Controller: NavigatorCtrl', function () {

  // load the controller's module
  beforeEach(module('botConfApp'));

  var NavigatorCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    NavigatorCtrl = $controller('NavigatorCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(NavigatorCtrl.awesomeThings.length).toBe(3);
  });
});
