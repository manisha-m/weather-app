var express = require('express');
var httpProxy = require('http-proxy');

var proxy = httpProxy.createProxyServer();

var app = express();

var isProduction = process.env.NODE_ENV === 'production';
var port = 3000;

console.log("I'm in the express server");

// We only want to run the workflow when not in production
if (!isProduction) {
    
  // We require the bundler inside the if block because
  // it is only needed in a development environment. Later
  // you will see why this is a good idea
  var bundle = require('./server/bundle.js');
  bundle();

  // Any requests to localhost:3000/build is proxied
  // to webpack-dev-server
  app.all('/build/*', function (req, res) {
    console.log("Trying to build...");  
    proxy.web(req, res, {
        target: 'http://localhost:8080'
    });
  });
    
}

// It is important to catch any errors from the proxy or the
// server will crash. An example of this is connecting to the
// server when webpack is bundling
proxy.on('error', function(e) {
  console.log('Could not connect to proxy, please try again...');
});


// And run the server
app.listen(port, function () {
  console.log('Server running on port ' + port);
});