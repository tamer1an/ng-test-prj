'use strict';

/* App Module */
angular.module('menuApp', ['menuAppFilters']);

/* Controllers */
function MenuCtrl($scope,$location,$window) { //console.log($window.location.pathname);
// Construct
  $scope.menuApp = {"lvl_1" : {"src":[],"active":false},"maxRenderLvl":1};

    angular.forEach(dataSrc,function(v,k){
      var lvlCounter = 1;

     if(v.url == $window.location.pathname)
        $scope.menuApp.lvl_1.active = k;

      if(typeof v.submenu=='object')
   
        this.push(
         (function getSubLvl(v,lvlCounter,parentIdx){
            lvlCounter++;

            v['lvl_'+parentIdx+'_'+lvlCounter] = {};
            v['lvl_'+parentIdx+'_'+lvlCounter].src = v.submenu;
            v['lvl_'+parentIdx+'_'+lvlCounter].active = false;

            for(var idx in v.submenu){
                if(v.submenu[idx].url == $window.location.pathname)
                    v['lvl_'+parentIdx+'_'+lvlCounter].active = idx;

                //console.log('idx -'+idx, v.submenu[idx])
                if(typeof v.submenu[idx]=='object')
                    v['lvl_'+parentIdx+'_'+lvlCounter].src.push(getSubLvl(v.submenu[idx],lvlCounter,idx));

                //console.log(lvlCounter)
            }
            return v;
          })(v,lvlCounter,k)
        );

      else this.push(v);

    },$scope.menuApp.lvl_1.src) 
    
   console.info($scope.menuApp);
}  MenuCtrl.$inject = ['$scope','$location','$window'];


/* Filters */
angular.module('menuAppFilters', []).filter('active', function() {
    return function(input) {
        return input ? 'active' : '';
    };
});