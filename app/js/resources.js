/**
 * User: antr
 * Date: 3/6/13
 * Time: 4:54 PM
 * Example Data source for app Testing
 */

var dataSrc =[
    {
        "name": "User",
        "title":"user",
        "url":'/ng-test-prj/app/index.html',
//        "renderLevel":2,
        "submenu": [{
            "name": "Add User",
            "title":"Add user",
            "url":'#'
        },{
            "name": "Edit User",
            "title":"Edit user",
            "url":'#'
        }]
    },{
        "name": "Video",
        "title":"video",
        "url":'#'
        },{
        "name": "Player",
        "title":"player",
        "url":'#',
//        "renderLevel":3,
        "submenu": [{
            "name": "Add Player",
            "title":"Add Player",
            "url":'/ng-test-prj/app/',
            "submenu": [{
              "name": "Add subPlayer",
              "title":"Add subPlayer",
              "url":'#'
            },{
              "name": "Edit subPlayer",
              "title":"Edit subPlayer",
              "url":'#'
            }]
        },{
            "name": "Edit Player",
            "title":"Edit Player",
            "url":'#',
            "submenu": [{
                "name": "Add _subPlayer",
                "title":"Add _subPlayer",
                "url":'#'
              },{
                "name": "Edit _subPlayer",
                "title":"Edit _subPlayer",
                "url":'#'
              }]
        }]
    },{
        "name": "Playlist",
        "title":"Playlist",
        "url":'#'
    },{
        "name": "User-Account",
        "title":"user-account",
        "url":'#'
    }
];


