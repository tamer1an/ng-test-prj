/*
 * GET home page.
 */

exports.index = function (req, res) {
    res.render('index', {
        title: 'Express',

        scripts: [
		
//          //TODO: Optimize app and devide functionality to modules  'javascripts/lib/require.js',
//            '../../../../../vendor/jasmine-2.0.0/jasmine31.js',
//            '../../../../../vendor/jasmine-2.0.0/console_reporter.js',
            'javascripts/lib/jasmine-html.js',
            'javascripts/lib/jasmine-2.0.0/console.js',
            'javascripts/lib/jasmine-2.0.0/boot.js',



//            'javascripts/lib/modernizr.js',

            'javascripts/app.js',
            'javascripts/spec/functional_tests.js'
        ]
    });
};