'use strict';

describe('Controller: IncubateeggsCtrl', function () {

  // load the controller's module
  beforeEach(module('botConfApp'));

  var IncubateeggsCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    IncubateeggsCtrl = $controller('IncubateeggsCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(IncubateeggsCtrl.awesomeThings.length).toBe(3);
  });
});
