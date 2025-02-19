var http = require("http"), url = require("url"), path = require("path"), fs = require("fs"), downa = require('./downa')
http.createServer(function (req, res) {
    var url_parts = url.parse(req.url, true);
    let pathname = url_parts.pathname;
    fs.readFile(req.url.slice(1), 'utf8', function(err, data) {                                                                                                                         
        res.writeHead(200, {'Content-Type': 'text/html'});
        if (req.url.indexOf(".md") != -1) { data = downa.render(data); }
        return res.end(data);
    });
}).listen(8090);
