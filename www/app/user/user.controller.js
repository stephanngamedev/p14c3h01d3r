(function() {
	'use strict';

	angular
		.module('p14c3h01d3r')
		.controller( 'UserController', UserController );

	UserController.$inject = [];

	function UserController() {
		var vm = this;
        vm.message = 'User page';
	}
})();
