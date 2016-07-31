'use strict';

describe('Controller: GeneralctrlCtrl', function () {

  // load the controller's module
  beforeEach(module('botConfApp'));

  var GeneralctrlCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    GeneralctrlCtrl = $controller('GeneralctrlCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(GeneralctrlCtrl.awesomeThings.length).toBe(3);
  });
});
