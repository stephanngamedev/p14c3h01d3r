(function() {
	'use strict';

	angular
		.module('p14c3h01d3r')
		.config( routes );

	routes.$inject = ['$stateProvider', '$urlRouterProvider', '$ionicConfigProvider'];

    function routes( $stateProvider, $urlRouterProvider ) {
        $stateProvider
			//SIGN IN
			.state('app.signIn', {
                url: '/sign-in',
                views: {
                    'view': {
                        templateUrl: 'my-auth/sign-in/sign-in.html',
                        controller: 'SignInController',
                        controllerAs: 'vm'
                    }
                }
            })

			//SIGN UP
			.state('app.signUp', {
                url: '/sign-up',
                views: {
                    'view': {
                        templateUrl: 'my-auth/sign-up/sign-up.html',
                        controller: 'SignUpController',
                        controllerAs: 'vm'
                    }
                }
            });
    }
})();
