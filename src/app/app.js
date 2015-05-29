(function(app) {

    // app.config(function ($stateProvider, $urlRouterProvider) {
    //     $urlRouterProvider.otherwise('/home');
    // });
    // app.run(function () {});

    app.controller('DashboardController',['$scope', '$mdSidenav', function ($scope,$mdSidenav) {
        $scope.toggleLeft = function() {
            $mdSidenav('left').toggle(); // .then(function(){  });
        };
        $scope.toggleRight = function() {
            $mdSidenav('right').toggle();// .then(function(){    });
        };
    }]);
    
}(angular.module("Form", [
        // 'ui.router.state',
        // 'ui.router'
    ])
));
