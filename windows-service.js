const Service = require('node-windows').Service;

const svc = new Service({
    name: 'My Node.js App',
    description: 'My Node.js app as a Windows service.',
    script: 'C://Users//ofek//Desktop//app-backend -ofek//src//app.ts'
  });
  svc.on('install', () => {
    svc.start();
  });
  svc.install();