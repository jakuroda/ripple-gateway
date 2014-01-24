var express = require('express');
var childProcess = require('child_process');
var middleware = require('./config/initializers/middleware.js');
var router = require('./config/routes.js');
var host = process.env.HOST;
var port = process.env.PORT || 4000;
var app = express();

middleware.configure(app);
router.route(app);

host ? app.listen(port, host) : app.listen(port);
childProcess.exec("node ripple-simple/app.js"); // http://0.0.0.0:5990
childProcess.exec("node workers/outgoing_ripple_payments.js");
childProcess.exec("node listener.js");

console.log('Serving HTTP on', (host || 'localhost')+":"+port);

