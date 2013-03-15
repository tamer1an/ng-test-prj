'use strict';
/* App Module */
angular.module('menuApp', ['menuAppFilters']);

/* Controllers */
function MenuCtrl($scope,$window,$location) {
    // configs
    var mainSpliter = '_', subSpliter='_';
    $scope.menuApp = {"renderArr":[],"submenu":[],"active":false,"maxRenderLvl":1,"itemLvl":0,"fullActivePath":"","mainSpliter":mainSpliter,"subSpliter":subSpliter};

    angular.forEach(dataSrc,function(v,k){
        var lvlCounter = 0;
        addMenuParams({"item":  v, "lvlCounter": lvlCounter, "idx": k, "fullPath":k });
        checkMenuURl(v, $scope.menuApp);

        if(typeof v.submenu=='object')
            this.push(
                (function getSubLvl(v,lvlCounter,parentIdx){
                    lvlCounter++;
                    for(var idx in v.submenu){
                        addMenuParams({"item":v.submenu[idx],"lvlCounter": lvlCounter,"idx": idx,"parent": k,"fullPath":parentIdx+mainSpliter+idx});
                        checkMenuURl(v.submenu[idx], v);

                        if(typeof v.submenu[idx].submenu=='object'){
                            lvlCounter++;
                            for(var index in v.submenu[idx].submenu){
                                addMenuParams({ "item":v.submenu[idx].submenu[index], "lvlCounter": lvlCounter, "idx": index, "parent": idx,"fullPath":parentIdx+mainSpliter+idx+subSpliter+index });
                                checkMenuURl(v.submenu[idx].submenu[index], v.submenu[idx]);
                                v.submenu[idx].submenu[index] = getSubLvl(v.submenu[idx].submenu[index],lvlCounter,parentIdx+mainSpliter+idx+subSpliter+index);
                            }
                        }
                    }
                    return v;
                })(v,lvlCounter,k) // recursive getSubLvl
            );  // push
        else
            this.push(v);

    },$scope.menuApp.submenu); //ngForEach

    getRenderArr();  //to builde render lvls   // console.info('Menu ready!!!',$scope.menuApp);

    // Util functions
    $scope.active = function(menu_lvl) {    // console.log(menu_lvl)
        $scope.menuApp.fullActivePath =  menu_lvl.fullPath;
        getRenderArr();
    };

    function addMenuParams(){ // console.log(arguments[0]);
        if(typeof arguments[0] == "object") {
            arguments[0].item.itemLvl = parseInt(arguments[0].lvlCounter);
            arguments[0].item.itemIdx = parseInt(arguments[0].idx);

            if (typeof arguments[0].parent !== 'undefined')
                arguments[0].item.itemParentIdx = parseInt(arguments[0].parent);

            if (typeof arguments[0].fullPath !== 'undefined')
                arguments[0].item.fullPath = arguments[0].fullPath;
        }
    }

    function checkMenuURl(v,itemLvl) {
        if(v.url == $window.location.pathname){
            itemLvl.active = v;
            itemLvl.activeIdx = v.itemIdx;
            $scope.menuApp.fullActivePath = v.fullPath;
        }
    }

    function getRenderArr(){
        var  tmpArr = [],
             srcArr = $scope.menuApp.submenu,
             split  = (typeof $scope.menuApp.fullActivePath === 'string' && $scope.menuApp.fullActivePath.length >0)
                        ? $scope.menuApp.fullActivePath.split("_")
                        : (typeof $scope.menuApp.fullActivePath === 'number') ? $scope.menuApp.fullActivePath : false;

        if (split!==false){
            if (typeof split === 'object'){
                for (var lvl in split){
                    srcArr.active = srcArr[split[lvl]];
                    tmpArr[lvl]=srcArr;
                    srcArr=srcArr[split[lvl]].submenu;
                }

                if(typeof srcArr === 'object')
                    tmpArr[tmpArr.length]=srcArr;
            } else {
                srcArr.active = srcArr[split];
                tmpArr[0]=srcArr;

                if(typeof srcArr.active.submenu === 'object')
                    tmpArr[tmpArr.length]=srcArr.active.submenu;
            }

        } else
            tmpArr[0]=srcArr;

        $scope.menuApp.renderArr = tmpArr;
        tmpArr = false; srcArr = false;
    }
}  MenuCtrl.$inject = ['$scope','$window','$location'];

/* Filters */
angular.module('menuAppFilters', [])
.filter('active', function() {
    return function(input) {
        return input ? 'active' : ' ';
    };
});






/*.filter('activeDefault', function() {
    return function(input) { // console.log(this,this.$last) // console.warn(this.$parent)
        return false;
    };
});*/