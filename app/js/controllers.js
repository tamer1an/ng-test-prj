'use strict';


/* Controllers */
function MenuCtrl($scope) {
    $scope.menus = menus;


    //testing ng-click
    $scope.hello = function(name) {
        console.log('Hello ' + (name || 'world') + '!');
    }
}