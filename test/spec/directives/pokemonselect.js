'use strict';

describe('Directive: pokemonSelect', function () {

  // load the directive's module
  beforeEach(module('botConfApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<pokemon-select></pokemon-select>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the pokemonSelect directive');
  }));
});
