#!/usr/bin/node
var cp = require('child_process');
var http = require('http');

var config = process.argv[2].split(':');
var listen = parseInt(config[0]);
var ip = config[1];

http.createServer(function(req, res) {
	cp.execFile('/usr/bin/ping', ['-q', '-w3', '-c1', '--', ip], function(err, stdout, stderr) {
		if(err) {
			res.writeHead(500, {'Content-Type': 'text/plain'});
			res.end('down\n');
		} else {
			res.writeHead(200, {'Content-Type': 'text/plain'});
			res.end('k\n');
		}
	});
}).listen(listen);
