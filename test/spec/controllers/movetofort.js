'use strict';

describe('Controller: MovetofortCtrl', function () {

  // load the controller's module
  beforeEach(module('botConfApp'));

  var MovetofortCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MovetofortCtrl = $controller('MovetofortCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(MovetofortCtrl.awesomeThings.length).toBe(3);
  });
});
