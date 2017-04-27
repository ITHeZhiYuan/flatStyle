require.config({
    paths: {
        "angular": "js/flat/lib/angular/angular.min",
        "flat-app": "js/flat/core/flat-app"
    },
    shim: {        
		"angular": { exports: "angular" },
    }
});
require(['angular'],function(){
	require(['flat-app'],function(){
	
	});
});
