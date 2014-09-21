'use strict';

/**
 *  @name {}
 *  @description {}
 *
 *  @module {}
 *  @author Andrii Trybynenko (...@gmail.com)
 *  @global {}
 */

var INApp = {
    app : angular.module('adminCRUD', [  ])
};

/**
 *  @name {}
 *  @description {Root derective}
 *  @module {}
 */
angular.module('adminCRUD').directive('users', function() {
    return {
        restrict: 'A',
        replace: true,
        templateUrl: 'html/users.html',
        controller: 'usersCtrl',
        link: function($scope,element){

        }
    }
});


