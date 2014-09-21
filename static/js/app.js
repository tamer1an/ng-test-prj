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
    app : angular.module('adminCRUD', [ 'ngRoute' ])
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


// Declare app level module which depends on filters, and services  ['myApp.filters', 'myApp.services', 'myApp.directives']
angular.module('adminCRUD').
  config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/view1', {templateUrl: '../partials/partial1.html', controller: 'usersCtrl'});
    // $routeProvider.when('/view2', {templateUrl: '../partials/partial2.html', controller: MyCtrl2});
    $routeProvider.otherwise({redirectTo: '/view1'});
  }]);
