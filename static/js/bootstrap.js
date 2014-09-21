


    Modernizr.load([
        {
            test : typeof(angular) == "object",
            nope : [
                '/js/vendor/angular/angular.js'
            ]
        },[{
            test : false,
            nope : [
                'css/main.css',
                'js/app.js',
                'js/controllers/main.js'
            ]
        }],['js/init.js']
    ]);
