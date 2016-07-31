'use strict';

describe('Controller: ReleaseCtrl', function () {

  // load the controller's module
  beforeEach(module('botConfApp'));

  var ReleaseCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ReleaseCtrl = $controller('ReleaseCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(ReleaseCtrl.awesomeThings.length).toBe(3);
  });
});
