'use strict';

describe('Controller: EvolveCtrl', function () {

  // load the controller's module
  beforeEach(module('botConfApp'));

  var EvolveCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    EvolveCtrl = $controller('EvolveCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(EvolveCtrl.awesomeThings.length).toBe(3);
  });
});
