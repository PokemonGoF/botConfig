'use strict';

describe('Filter: keyfilter', function () {

  // load the filter's module
  beforeEach(module('botConfApp'));

  // initialize a new instance of the filter before each test
  var keyfilter;
  beforeEach(inject(function ($filter) {
    keyfilter = $filter('keyfilter');
  }));

  it('should return the input prefixed with "keyfilter filter:"', function () {
    var text = 'angularjs';
    expect(keyfilter(text)).toBe('keyfilter filter: ' + text);
  });

});
