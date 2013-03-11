'use strict';

/* App Module */
angular.module('menuApp', ['menuAppFilters']);

/* Controllers */
function MenuCtrl($scope,$location,$window) { //console.log($window.location.pathname);
  // Construct

  $scope.menuApp = {"src":[],"active":false,"maxRenderLvl":1,"itemLvl":0};

    angular.forEach(dataSrc,function(v,k){
      var lvlCounter = 0;
      v.itemLvl = lvlCounter;
      v.itemIdx = k;

//     if(v.url == $window.location.pathname)
//        $scope.menuApp.lvl_1.active = k;

      if(typeof v.submenu=='object'){
        this.push(
         (function getSubLvl(v,lvlCounter,parentIdx){
            var tmpContainer = false;
            lvlCounter++;

            for(var idx in v.submenu){
//              if(v.submenu[idx].url == $window.location.pathname)
//                 v['lvl_'+lvlCounter+'_'+parentIdx].active = idx;

                v.submenu[idx].itemLvl = lvlCounter;
                v.submenu[idx].itemIdx = parseInt(idx);

                if(typeof v.submenu[idx].submenu=='object'){
                    lvlCounter++;

                    tmpContainer = v.submenu[idx].submenu;
                    v.submenu[idx].submenu = [];

                    for(var index in tmpContainer){
                        tmpContainer[index].itemLvl=lvlCounter;
                        tmpContainer[index].itemIdx=parseInt(index);
                        v.submenu[idx].submenu.push(getSubLvl(tmpContainer[index],lvlCounter,index));
                    }
                    tmpContainer = false;
                }
            } // for in submenu
            return v;

          })(v,lvlCounter,k) // getSubLvl
        );  // push

      } else {
          this.push(v);
      }

    },$scope.menuApp.src) //ngForEach
    console.info($scope.menuApp);
}  MenuCtrl.$inject = ['$scope','$location','$window'];

/* Filters */
angular.module('menuAppFilters', []).filter('active', function() {
    return function(input) {
        return input ? 'active' : '';
    };
});