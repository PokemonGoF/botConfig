'use strict';

describe('Controller: GetconfigCtrl', function () {

  // load the controller's module
  beforeEach(module('botConfApp'));

  var GetconfigCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    GetconfigCtrl = $controller('GetconfigCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(GetconfigCtrl.awesomeThings.length).toBe(3);
  });
});
