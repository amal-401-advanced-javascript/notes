const isUrl = require('is-url');
const minimist = require('minimist');
let regularExp = /^add$|^a$/ig;

class Input {
    constructor() {
        const argv = minimist(process.argv.slice(2));
        
        let checkUserMethod = process.argv[2];

        let methodd;
        let message;
        
        if (Object.keys(argv).length > 1) {
            methodd = Object.keys(argv)[1];
            message = argv[methodd];
        } else {
            methodd = Object.keys(argv)[0];
            message = argv[methodd];
        }
// regularExp.test(methodd) && (checkUserMethod === '--add' || checkUserMethod === '-a' || checkUserMethod === '--a')

        if (argv) {
            if (regularExp.test(methodd) && !argv.u) {
                if (typeof (message) === 'string') {
                    this.action = methodd;
                    this.payload = message;

                } else {
                    // to insert a message after action 
                    console.log('you should enter a message');
                }
            } else {
                // to insert a correct action
                console.log('you should use this to add a message (--add || -a || --a )');

            }
        }
    }

    valid() {
        let regularExp = /^add$|^a$/ig;
        if (regularExp.test(this.action) && typeof (this.payload) === 'string') {
            return true;
        } else {
            return false;
        }
    }
}
module.exports = Input;