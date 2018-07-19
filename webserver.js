// Dependencies
var express = require('express');

// Host http server on port 3000
imageServer = express();
imageServer.use("/", express.static(__dirname));
imageServer.listen(3000);