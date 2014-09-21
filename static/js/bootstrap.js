


    Modernizr.load([
        {
            test : typeof(angular) == "object",
            nope : [
                '/js/library/vendor/angular/angular.js'
            ]
        },[{
            test : false,
            nope : [
                vkModulePath+'css/main.css',
                vkModulePath+'js/app.js',
                vkModulePath+'js/controllers/main.js'
            ]
        }],[vkModulePath+'js/init.js']
    ]);
