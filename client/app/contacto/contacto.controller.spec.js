'use strict';

describe('Component: ContactoComponent', function () {

  // load the controller's module
  beforeEach(module('bootstrapAppApp'));

  var ContactoComponent, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($componentController, $rootScope) {
    scope = $rootScope.$new();
    ContactoComponent = $componentController('ContactoComponent', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    1.should.equal(1);
  });
});
