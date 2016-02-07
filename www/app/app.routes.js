(function() {
	'use strict';

	angular
		.module('p14c3h01d3r')
		.config( routes );

	routes.$inject = ['$stateProvider', '$urlRouterProvider', '$ionicConfigProvider'];

	function routes( $stateProvider, $urlRouterProvider ) {
		$stateProvider
			.state('app', {
				url: '',
				abstract: true,
				templateUrl: 'app/app.html',
				controller: 'AppController'
			})

            .state('app.public', {
                url: '/public',
				views: {
					'view': {
						templateUrl: 'app/public/public.html',
						controller: 'PublicController',
						controllerAs: 'vm'
					}
				}
            })

			.state('app.user', {
				url: '/user',
				authenticate: 'user',
				views: {
					'view': {
						templateUrl: 'app/user/user.html',
						controller: 'UserController',
						controllerAs: 'vm'
					}
				}
			})

            .state('app.admin', {
				url: '/admin',
				authenticate: 'admin',
				views: {
					'view': {
						templateUrl: 'app/admin/admin.html',
						controller: 'AdminController',
						controllerAs: 'vm'
					}
				}
			});


		$urlRouterProvider.otherwise( '/public' );
	}
})();
