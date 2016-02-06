(function() {
	'use strict';

    angular
        .module("p14c3h01d3r.myAuth")
        .run( authenticate );

    authenticate.$inject = [ '$rootScope', '$state', '$auth'];

    function authenticate( $rootScope, $state, $auth ) {
        $rootScope.$on("$stateChangeStart", function(event, toState, toParams, fromState, fromParams){
            if (toState.authenticate && !AuthService.isAuthenticated()){
                // User isn’t authenticated
                $state.transitionTo("login");
                event.preventDefault();
            }
        });
    };
})();
