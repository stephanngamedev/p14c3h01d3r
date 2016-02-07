(function() {
	'use strict';

	angular
		.module('p14c3h01d3r')
		.controller( 'AdminController', AdminController );

	AdminController.$inject = ['$stateParams'];

	/* @ngInject */
	function AdminController( $stateParams ) {
		var vm = this;
        vm.message = 'Admin page';
	}
})();
