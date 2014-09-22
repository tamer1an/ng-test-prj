'use strict';

/**
 *  @name {}
 *  @description {
 *
 *  @module {}
 *  @author Andrii Trybynenko ()
 *  @global {}
 */

angular.module('adminCRUD')
       .controller('usersCtrl', function ($scope,$compile,$http) { //  $scope.frames = window.frames;
        $scope.appModel= {
            users : [{firstName:"Fred",lastName:"Witers"},{firstName:"Joe",lastName:"Winters"}]
        };

        $scope.removeUser = function(idx){
            $scope.appModel.users.pop(idx);
        };

        $scope.addUser = function(){
            $scope.appModel.users.push({firstName:this.newUserName,lastName:this.newUserLastName});
        };

        $scope.removeAllUsers = function(){
            $scope.appModel.users = [];
        };
    });

