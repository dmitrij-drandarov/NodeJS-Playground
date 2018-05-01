const log = require('./logger');
const path = require('path');
const os = require('os');
const fs = require('fs');
const EventEmitter = require('events');
const emitter = new EventEmitter();


function sayHello(name) {
    // Modules
    console.log('Hello ' + name);
    console.log('Bye ' + name);
    log('Tracked: ' + name);

    // Path
    console.log(path.parse(__filename));

    // OS
    console.log('Total Memory ' + os.totalmem());
    console.log(`Total Memory: ${os.totalmem()}`); // Template String

    // FS
    console.log(fs.readdirSync('./iteration_01'));
    // AsyncFS (Pref.)
    fs.readdir('./iteration_01', function(err, files) {
        if (err) console.log('Error', err);
        else console.log('Result', files);
    });

    // Events - Register Listener
    emitter.on('messageLoggedEvent', function(arg) {
       console.log('Listener called');
       if (typeof arg != 'undefined') {
           console.log(`Args: ID: ${arg.id}, URL: ${arg.url}`);
       }
       console.log('Listener called', arg);
    });

    // Events - Emit Event
    emitter.emit('messageLoggedEvent');
    emitter.emit('messageLoggedEvent', {id: 1, url:'http://google.de'});
}

sayHello('Dimi');
