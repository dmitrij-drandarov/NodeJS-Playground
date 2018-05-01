const Logger = require('./logger');
const logger = new Logger();


logger.on('messageTrackedEvent', (arg) => {
    console.log('MessageTrackedEvent send to logger.js', arg);
});


logger.track('Dimi');
