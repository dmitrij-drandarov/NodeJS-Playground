const EventEmitter = require('events');


class Logger extends EventEmitter{

    track(name) { // Method, not function
        // Send "HTTP request"
        console.log(`Tracked user: ${name}`);

        // Events - Emit Event
        this.emit('messageTrackedEvent', {id: 1, name: name});
    }
}


module.exports = Logger;
