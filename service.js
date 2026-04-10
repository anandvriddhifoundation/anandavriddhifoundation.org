const path = require('path');
var Service = require('node-windows').Service;

// Create a new service object
var svc = new Service({
  name: 'anand_vriddhi_foundation_frontend',
  description: 'The nodejs.org example web server.',
  script: path.join(__dirname, 'server.js'),
  nodeOptions: [
    // '--harmony',
    '--max_old_space_size=8192'
  ]
  , workingDirectory: __dirname
  //, allowServiceLogon: true
});

// Listen for the "install" event, which indicates the
// process is available as a service.
svc.on('install',function(){
  svc.start();
});

svc.install();
