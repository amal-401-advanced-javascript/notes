
const minimist = require('minimist');


class Input {
  constructor() {
    
    let regularExpAdd = /^add$|^a$/ig;
    let regularExpCategory = /^category$/ig;
    let regularExpList = /^list$/ig;
    let regularExpDelete = /^delete$/ig; 
    let argv = minimist(process.argv.slice(2));

    let methodAdd;
    let messageAdd;
    let methodCategory;
    let messageCategory;
    let methodDeleteById;
    let messageDeleteById;
    let argvLen = Object.keys(argv).length;
    


    if (Object.keys(argv).length === 3 ) {
      methodAdd = Object.keys(argv)[1];
      methodCategory = Object.keys(argv)[2];
      messageAdd = argv[methodAdd];
      messageCategory = argv[methodCategory];

    } else if (Object.keys(argv).length === 2){
      methodDeleteById = Object.keys(argv)[1]; 
      messageDeleteById = argv[methodDeleteById];

    }else if(Object.keys(argv).length === 1){
      methodAdd = Object.keys(argv)[0];
      methodCategory = Object.keys(argv)[1];
      messageAdd = argv[methodAdd];
      this.action = methodAdd;
      this.category = methodCategory;
      this.payload = messageAdd;
    }

    
    let testAdd = regularExpAdd.test(methodAdd) && regularExpCategory.test(methodCategory) && !(argvLen > 3) ;
    let testList = regularExpList.test(methodDeleteById) && !(argvLen > 2);
    let testDelete = regularExpDelete.test(methodDeleteById) && !(argvLen > 2);
    
    if (testAdd) {
      if (typeof (messageAdd) === 'string' && typeof (messageCategory) === 'string') {
        this.action = methodAdd;
        this.payload = messageAdd;
        this.category = messageCategory;
      } else {
        console.log('you should enter a message with "" ');
      }
    }else if(testList){
      this.action = methodDeleteById;
      this.payload = messageDeleteById;
    }else if(testDelete){
      if(typeof(messageDeleteById) === 'string'){
        this.action = methodDeleteById;
        this.payload = messageDeleteById;
      }else{
        console.log('you should write id');    
      }
    }else{
      console.log(`* you should wirte (--add with a note and --category for the category) || (--a/-a)
        * you should write --list to show all the notes or you can do -- list with a category 
        * you should write --delete with an id to delete a note `);
    }
  }
    

  valid(){
    let regularExpAdd = /^add$|^a$/ig;
    if (regularExpAdd.test(this.action) && typeof (this.payload) === 'string') {
      return true;
    } else {
      return false;
    }
  }
}
module.exports = Input;