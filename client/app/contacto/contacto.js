'use strict';

angular.module('bootstrapAppApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('contacto', {
        url: '/contacto',
        template: '<contacto></contacto>'
      });
  });
