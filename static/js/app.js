'use strict';

/**
 *  @name {}
 *  @description {}
 *
 *  @module {virtualKeypad}
 *  @author Andrii Trybynenko (...@gmail.com)
 *  @global {}
 */

var fpApp = {
    app : angular.module('framePlayer', [
//        'ngCsv'
    ])
};

/**
 *  @name {}
 *  @description {Root derective}
 *  @module {}
 */
angular.module('adminCRUD').directive('admin', function() {
    return {
        restrict: 'A',
        replace: true,
        templateUrl: vkModulePath+'html/admin.html',
        controller: 'adminCtrl',
        link: function($scope,element){

        }
    }
});



//function updateJustEventId () {
//    eventId = document.querySelectorAll('li[data-eventid].c')[0].dataset.eventid;
//}
