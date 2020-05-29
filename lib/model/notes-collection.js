  
const NoteDb = require('../model/notes-schema.js');
class Note {
  create(note){
    let item = new NoteDb(note);
    return  item.save();
  }
  get(cat){
    return NoteDb.find(cat);
  }
  update(up){
  }
  delete(id){
    return  NoteDb.findOneAndDelete({ _id: id});
  }

}

module.exports = new Note();