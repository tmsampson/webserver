// Dependencies
var express = require('express');

// Host http server on port 3000
var args = process.argv.slice(2);
if(args.length == 0)
{
	console.log("ERROR: Please pass webserver root on command line");
	process.exit(0);
}

var root = args[0];
webserver = express();
webserver.use("/", express.static(root));
webserver.listen(3000);

// Log
console.log("Serving " + root + " @ http://localhost:3000");