function Notes(note){

}
Notes.prototype.execute = function (notes){
    if(notes.payload){
        console.log('new note added', notes);
        
    }
}

Notes.prototype.add = function (adds){
    if (adds.payload){
        let newN = {
            id: Math.ceil(Math.random() * 10),
            note : adds.payload
        }
        console.log('The message: ', newN);
        
    }
}

module.exports = Notes;