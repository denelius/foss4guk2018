var express = require('express')
var server = express()
server.use(express.static(__dirname + '/'))
var port = 3939
server.listen(port, function() {
    console.log('server listening on port ' + port)
})
