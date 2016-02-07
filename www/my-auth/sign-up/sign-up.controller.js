(function() {
    'use strict';

    angular
        .module('p14c3h01d3r')
        .controller('SignUpController', SignUpController);

    SignUpController.$inject = [ '$auth' ];

    /* @ngInject */
    function SignUpController( $auth ) {
        var vm = this;
    }
})();
