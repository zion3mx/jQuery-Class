require.config({

	baseUrl: 'js',

	paths: {
		'jquery'          : 'libs/jquery.min',
		'jquery.dataLink' : 'plugins/jquery.generate.dataLink'
	},

	shim: {
		'jquery.dataLink': {
			deps    : ['jquery'],
			exports : '$.fn.dataLink'
		}
	},

	urlArgs : 'ts=' + (new Date()).getTime()
});

require(['init']);