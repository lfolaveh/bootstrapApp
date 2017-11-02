'use strict';
(function() {

    class ContactoComponent {
        constructor() {
            this.message = 'Hello';
        }
    }

    angular.module('bootstrapAppApp')
        .component('contacto', {
            templateUrl: 'app/contacto/contacto.html',
            controller: ContactoComponent,
            controllerAs: 'vm'
        });

})();