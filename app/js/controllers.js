'use strict';


/* Controllers */
function MenuCtrl($scope,$location)) {    //$window
    $scope.menus = menus;



    console.log( $location )

    $scope.active = function(name) {
       console.log($scope.menus[0].active=1)
    };

   $scope.helloThis = function(app) {
        //  console.log(app);
        //  console.log($('#'+app.$id));
    };
}