'use strict';

/* Controllers */
function MenuCtrl($scope,$location) { //console.warn('Test angular location objects',$location);  //$window, $document
    $scope.menus = menus;

    $scope.active = function() { //console.error( this,this.$id, this.$index );
        // var log = [];
        angular.forEach($scope.menus, function(value, key){     // this.push(key + ': ' + $scope.menus[key].active);   // if var log was defined
            ($scope.menus[key].active)?$scope.menus[key].active=0:'false';
        }/*, log*/);

        $scope.menus[this.$index].active = 1;
    };
}





//    /////////////////////
//function RouteCtrl($route) {
//
//    var self = this;
//
//    $route.when('/wines', {template:'tpl/welcome.html'});
//
//    $route.when('/wines/:wineId', {template:'tpl/wine-details.html', controller:WineDetailCtrl});
//
//    $route.otherwise({redirectTo:'/wines'});
//
//    $route.onChange(function () {
//        self.params = $route.current.params;
//    });
//
//    $route.parent(this);
//
//    this.addWine = function () {
//        window.location = "#/wines/add";
//    };
//}