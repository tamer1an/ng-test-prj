'use strict';

/* App Module */
angular.module('menuApp', ['menuAppFilters']);


/* Controllers */
function MenuCtrl($scope,$location,$window) {
    //Construct:
    var active_menu;
    $scope.menus = menus;
    angular.forEach($scope.menus, function(value, key){
        if($scope.menus[key].url == $window.location.pathname)
            (active_menu = $scope.menus[key]).active=1;
    });

    //Scope function:
    $scope.active = function() {
        active_menu.active = 0;
        (active_menu = $scope.menus[this.$index]).active = 1;
    };
}  MenuCtrl.$inject = ['$scope','$location','$window'];


/* Filters */
angular.module('menuAppFilters', []).filter('active', function() {
    return function(input) {
        return input ? 'active' : '';
    };
});