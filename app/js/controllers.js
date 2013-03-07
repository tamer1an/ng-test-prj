'use strict';

/* Controllers */
function MenuCtrl($scope,$location,$window) {
    $scope.menus = menus;

    angular.forEach($scope.menus, function(value, key){
        ($scope.menus[key].url == $window.location.pathname)?$scope.menus[key].active=1:'false';
    });

    $scope.active = function() {
        angular.forEach($scope.menus, function(value, key){
            ($scope.menus[key].active)?$scope.menus[key].active=0:'false';
        });
        $scope.menus[this.$index].active = 1;
    };
}  MenuCtrl.$inject = ['$scope','$location','$window'];