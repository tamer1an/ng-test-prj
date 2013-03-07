'use strict';

/* Controllers */
function MenuCtrl($scope,$location) {console.warn('Test angular location objects',$location);  //$window, $document
    $scope.menus = menus;

    $scope.active = function(node) {
        console.log( this );
        console.log( this.$id );
        console.log( this.$index );

//      var log = [];
        angular.forEach($scope.menus, function(value, key){
//           this.push(key + ': ' + $scope.menus[key].active);
            ($scope.menus[key].active)?$scope.menus[key].active=0:'false';//        console.log($scope.menus[key].active)
        }); // console.log(log);

        $scope.menus[this.$index].active = 1;

//       console.log('active func node',node,node.this,node.this.$parent);
//       console.log(node.$id,$('#'+node.$id),$('#'+node.$id).size());
    };

   $scope.helloThis = function(node) {
        console.warn('hello this func:',node);
//        console.log($('#'+node.$id));
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