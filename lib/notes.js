'use strict';

require('dotenv').config();
const mongoose = require('mongoose');
const NoteDb = require('../lib/model/notes-collection.js');

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/note';

mongoose.connect(MONGODB_URI,{
  useNewUrlParser:true,
  useUnifiedTopology : true,
});
 
class Notes {
  constructor(note) {

  }
  execute(notes) {
    let regularExpAdd = /^add$|^a$/ig;
    let regularExpList = /^list$/ig;
    let regularExpDelete = /^delete$/ig; 
    if (notes) {
      if(regularExpAdd.test(notes.action)){
        return this.add(notes);
      }else if(regularExpList.test(notes.action)){
        return this.list(notes);
      }else if(regularExpDelete.test(notes.action)){
        return this.delete(notes);
      }
    }
  }
    

  async add(adds){
    let newNote = {
      text: adds.payload,
      category : adds.category,
    };
    const myNote = await NoteDb.create(newNote);
    console.log('Save Note', myNote.text);
    mongoose.disconnect();    
  }
  async list(li){
    if ( typeof (li.payload) === 'string'){
      const categoryNote = await NoteDb.get({category: li.payload});
      categoryNote.forEach(value=>{
        console.log(`${value.text}
        category : ${value.category}     id : ${value.id}
        .....................................`);
      });
 
    }else{
      const allNoteSaved = await NoteDb.get({});
      allNoteSaved.forEach(value=>{
        console.log(`${value.text}
        category : ${value.category}     id : ${value.id}
        .....................................`);
      });
    }
    mongoose.disconnect();
  }

  async delete(del){
    try{
      await NoteDb.delete(del.payload);
    }catch(error){
      console.log('invalid id');
    }
    mongoose.disconnect();
    
  }

}
module.exports = Notes;