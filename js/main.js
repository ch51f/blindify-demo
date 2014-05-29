requirejs.config({

	baseUrl: 'js/lib',

	shim: {
		'f-blindify': {
			deps: ['jquery'],

			exports: 'Blindify'
		},
		'jquery': {
			exports: '$'
		}
	}
});

requirejs(["f-blindify"], function(Blindify) {
	$('#blindify').blindify();
});
