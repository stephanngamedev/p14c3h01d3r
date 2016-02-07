(function() {
	'use strict';

	angular
		.module('p14c3h01d3r')
		.config( configure );

	configure.$inject = ['$authProvider', 'settings'];

	function configure( $authProvider, settings) {
        $authProvider.configure({
            apiUrl: settings.apiUrl,
            storage: 'localStorage',
            validateOnPageLoad: false
        });
	};
})();
