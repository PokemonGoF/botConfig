'use strict';

describe('Controller: FollowspiralCtrl', function () {

  // load the controller's module
  beforeEach(module('botConfApp'));

  var FollowspiralCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    FollowspiralCtrl = $controller('FollowspiralCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(FollowspiralCtrl.awesomeThings.length).toBe(3);
  });
});
