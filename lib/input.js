const isUrl = require('is-url');
const minimist = require('minimist');


class Input {
    constructor() {
        let expAdd = /^add$|^a$/ig;
        let expDelete = /^delete$/ig; 
        let expCategory = /^category$/ig;
        let expList = /^list$/ig; 

        let argv = minimist(process.argv.slice(2));
        let checkUserMethod = process.argv[2];

        let methoddAdd;
        let messageAdd;

        let methoddCat;
        let messageCat;

        let methoddDel;
        let messageDel;

        let argvlen = Object.keys(argv).length;

        if( argvlen === 3 ){
            methoddAdd = Object.keys(argv)[1];
            methoddCat = Object.keys(argv)[2];
            messageAdd = argv[methoddAdd];
            messageCat = argv[methoddCat];
        }else if(argvlen === 2 ){
            methoddDel = Object.keys(argv)[1];
            messageDel = argv[methoddDel];
        }else if( argvlen === 1){
            methoddAdd = Object.keys(argv)[0];
            messageAdd = argv[methoddAdd];
            this.action = methoddAdd;
            this.payload = messageAdd;
        }

// regularExp.test(methodd) && (checkUserMethod === '--add' || checkUserMethod === '-a' || checkUserMethod === '--a')

        if (argv) {
            if (expAdd.test(methoddAdd) && !argv.u) {
                if (typeof (messageAdd) === 'string') {
                    this.action = methoddAdd;
                    this.payload = messageAdd;

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