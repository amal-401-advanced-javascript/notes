'use strict';
const isUrl = require('is-url');
const minimist = require('minimist');

function Input(){
    let checkUserMethod = process.argv[2];
    // console.log('checkUserMethod',checkUserMethod);
    
    const argv = minimist(process.argv.slice(2));
    // console.log('argv',argv);


    

    //array of object
    let methodd = Object.keys(argv)[1];
    console.log(methodd);
    

    let message = argv[methodd];
    console.log(message);
    

    // let regularExp = /^\-{2}add$|^\-{2}a$|^\-a$/gi;
    let regularExp = /^add$|^a$/gi;

    if(regularExp.test(methodd) && (checkUserMethod === '--add' || checkUserMethod === '-a'|| checkUserMethod === '--a')){
        if(typeof(message) === 'string'){
            this.action = methodd;
            this.payload = message;

        }else{
            // to insert a message after action 
            console.log('you should enter a message');
        }
     }else{
         // to insert a correct action
            console.log('you should use this to add a message (--add || -a || --a )');
            
     } 
}

module.exports = Input;