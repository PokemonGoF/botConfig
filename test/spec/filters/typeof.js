'use strict';

describe('Filter: typeof', function () {

  // load the filter's module
  beforeEach(module('botConfApp'));

  // initialize a new instance of the filter before each test
  var typeof;
  beforeEach(inject(function ($filter) {
    typeof = $filter('typeof');
  }));

  it('should return the input prefixed with "typeof filter:"', function () {
    var text = 'angularjs';
    expect(typeof(text)).toBe('typeof filter: ' + text);
  });

});
