express  = require 'express'
http = require 'http'
path = require 'path'

app = express()
app.set 'port', process.env.PORT || 3000
app.use express.static path.join(__dirname, 'build')

server = http.createServer(app).listen app.get('port'), ->
  console.log('Express server listening on port: ' + app.get 'port' )