'use strict';

/* App Module */
angular.module('menuApp', ['menuAppFilters']);

/* Controllers */
function MenuCtrl($scope,$location,$window) { //console.log($window.location.pathname);
// Construct:
    $scope.active_menu=false;
    $scope.menus=menus;

// URL matching filter
    angular.forEach($scope.menus, function(value, key){
        if($scope.menus[key].url == $window.location.pathname)
            ($scope.active_menu = $scope.menus[key]).active=1;                     
                    
        if(!$scope.active_menu && typeof $scope.menus[key].submenu=='object')
        				angular.forEach($scope.menus[key].submenu, function(v, k){
        				
						        if($scope.menus[key].submenu[k].url == $window.location.pathname){
						            ($scope.active_submenu = $scope.menus[key].submenu[k]).active=1;	      	           
                  ($scope.active_menu = $scope.menus[key]).active=1;                     
  				         }
        				});
    });

// Scope functions:
    // ngClick heandler
    $scope.active = function(menu_lvl) {
     if(!menu_lvl){
        $scope.active_menu.active = 0;
        ($scope.active_menu = $scope.menus[this.$index]).active = 1;
      }else{
      		angular.forEach(menu_lvl, function(v, k){ v.active = 0; });        				
		      menu_lvl[this.$index].active = 1;
      }
    };
    
}  MenuCtrl.$inject = ['$scope','$location','$window'];


/* Filters */
angular.module('menuAppFilters', []).filter('active', function() {
    return function(input) {
        return input ? 'active' : '';
    };
});