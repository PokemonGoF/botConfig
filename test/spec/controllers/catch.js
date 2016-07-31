'use strict';

describe('Controller: CatchCtrl', function () {

  // load the controller's module
  beforeEach(module('botConfApp'));

  var CatchCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    CatchCtrl = $controller('CatchCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(CatchCtrl.awesomeThings.length).toBe(3);
  });
});
