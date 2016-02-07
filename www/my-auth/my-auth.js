(function() {
	'use strict';

    angular
        .module("p14c3h01d3r")
        .run( initializer );

	initializer.$inject = [ 'stateChangeListener' ];

    function initializer( stateChangeListener ) {
        stateChangeListener.initialize();
    };
})();
