(function(app) {

    // app.config(function ($stateProvider, $urlRouterProvider) {
    //     $urlRouterProvider.otherwise('/home');
    // });
    // app.run(function () {});

    app.controller('DashboardController',['$scope', '$mdSidenav', function ($scope,$mdSidenav) {
        $scope.toggleLeft = function() {
            $mdSidenav('left').toggle();//.then(function(){  });
        };
        $scope.toggleRight = function() {
            $mdSidenav('right').toggle();//.then(function(){    });
        };
    }]);
    
    app.controller('LeftCtrl', function($scope, $timeout, $mdSidenav, $log) {
      $scope.close = function() {
        $mdSidenav('left').close() // .then(function(){  });
      };
    })
    
    app.controller('RightCtrl', function($scope, $timeout, $mdSidenav, $log) {
      $scope.close = function() {
        $mdSidenav('right').close() // .then(function(){ });
      };
    });
    
    
    app.config(['$mdThemingProvider', function( $mdThemingProvider ){

       $mdThemingProvider.definePalette('ngDashboard', $mdThemingProvider.extendPalette( 'black', {
            '50': 'd11818',
            '100': 'd11818',
            '200': 'd11818',
            '300': 'd11818',
            '400': 'd11818',
            '500': 'ffffff',
            '600': 'd11818',
            '700': 'd11818', 
            '800': 'd11818', // base color
            '900': 'd11818',

            'A100': 'd11818',
            'A200': 'd11818',
            'A400': 'd11818',
            'A700': 'd11818'
        }));

        $mdThemingProvider.theme('default')
            .primaryPalette('ngDashboard')
            .accentPalette('red')
            .warnPalette('red').dark()

        // $mdThemingProvider.theme('light')
        //     .primaryPalette('grey')
        //     .light();
    }])


}(angular.module("msDashboard", [
        'ngMaterial'
      
        // 'msDashboard.home',
        // 'msDashboard.about',
        // 'templates-app',
        // 'templates-common',
        // 'ui.router.state',
        // 'ui.router',
        
    ])
));
