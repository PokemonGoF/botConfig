'use strict';

describe('Service: ConfigService', function () {

  // load the service's module
  beforeEach(module('botConfApp'));

  // instantiate service
  var ConfigService;
  beforeEach(inject(function (_ConfigService_) {
    ConfigService = _ConfigService_;
  }));

  it('should do something', function () {
    expect(!!ConfigService).toBe(true);
  });

});
