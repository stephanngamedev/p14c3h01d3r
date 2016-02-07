(function() {
    'use strict';

    angular
        .module('p14c3h01d3r')
        .controller('SignInController', SignInController);

    SignInController.$inject = [ '$auth' ];

    /* @ngInject */
    function SignInController( $auth ) {
        var vm = this;
    }
})();
