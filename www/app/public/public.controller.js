(function() {
	'use strict';

	angular
		.module('p14c3h01d3r')
		.controller( 'PublicController', PublicController );

	PublicController.$inject = [];

	function PublicController() {
		var vm = this;
        vm.message = 'Public page';
	};
})();
