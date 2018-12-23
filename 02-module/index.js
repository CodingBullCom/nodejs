var http = require('http');
var mymodule = require('./mymodule/mymodule')

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write('<h2>Hello NodeJS modules</h2>\n');
    res.write("The date and time are currently: " + mymodule.myDateTime());
    res.end()
}).listen(8080);
