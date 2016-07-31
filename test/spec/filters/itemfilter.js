'use strict';

describe('Filter: itemfilter', function () {

  // load the filter's module
  beforeEach(module('botConfApp'));

  // initialize a new instance of the filter before each test
  var itemFilter;
  beforeEach(inject(function ($filter) {
    itemFilter = $filter('itemfilter');
  }));

  it('should return the input prefixed with "itemFilter filter:"', function () {
    var text = 'angularjs';
    expect(itemFilter(text)).toBe('itemFilter filter: ' + text);
  });

});
