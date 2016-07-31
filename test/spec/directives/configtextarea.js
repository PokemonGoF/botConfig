'use strict';

describe('Directive: configTextarea', function () {

  // load the directive's module
  beforeEach(module('botConfApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<config-textarea></config-textarea>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the configTextarea directive');
  }));
});
