const connect = require('connect');
const serveStatic = require('serve-static');
const clientDir = __dirname + '/client';
const port = 3000;

connect().use(serveStatic(clientDir)).listen(port);
