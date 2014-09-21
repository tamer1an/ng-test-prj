/**
 * Virtual keypad template environment
 */
var routesFolder = 'test/mockDataRoutes',
    express  = require('express'),
    routes   = require('./'+routesFolder),
    mockData = require('./'+routesFolder+'/mockData'),
    http = require('http'),
    path = require('path');

var app = express();
// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'templates/jade'));
app.set('view engine', 'jade');
app.use(express.static(path.join(__dirname, 'static')));
app.get('/', routes.index);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
