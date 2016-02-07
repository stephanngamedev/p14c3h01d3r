(function() {
    'use strict';

    angular
        .module('p14c3h01d3r' )
        .factory('stateChangeListener', stateChangeListener);

    stateChangeListener.$inject = [ '$rootScope', '$state', '$auth', '$q' ];

    function stateChangeListener( $rootScope, $state, $auth, $q ) {
        var service = {
            initialize: initialize,
        };

        return service;

        ////////////

        function initialize() {
            $rootScope.$on("$stateChangeStart", watcher );
        };

        function watcher(event, toState, toParams, fromState, fromParams) {
            if ( toState.authenticate ){
                $auth.validateUser()
                    .then( authorizeUser )
                    .catch( goToSignIn );
            };

            function authorizeUser( user ) {
                if( user.profile.name == userProfile ){
                    toParams.currentUser = user;
                } else {
                    event.preventDefault();
                    $state.go( 'error404' );
                };
            };

            function goToSignIn( error ) {
                console.log( error );
                event.preventDefault();
                $state.go( 'app.signIn' );
                return $q.reject( error );
            };
        };
    };
})();
