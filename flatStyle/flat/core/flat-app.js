/*初始化APP*/
var flat = angular.module("flat",["ui.router",'oc.lazyLoad','ngLocale','ui.bootstrap']);
/*自动注册angularjs的工具*/
flat.config(["$provide", "$compileProvider", "$controllerProvider", "$filterProvider",
	function($provide, $compileProvider, $controllerProvider, $filterProvider) {
	    flat.controller = $controllerProvider.register;
	    flat.directive = $compileProvider.directive;
	    flat.filter = $filterProvider.register;
	    flat.factory = $provide.factory;
	    flat.service = $provide.service;
	    flat.constant = $provide.constant;
	}
]);
/*alert(window.document.location.href);
alert(window.document.location.pathname);*/
