// Dependencies
const path = require("path");
const url = require("url");
var express = require('express');

// Host image cache on port 3000
imageServer = express();
imageServer.use("/", express.static(__dirname));
imageServer.listen(3000);