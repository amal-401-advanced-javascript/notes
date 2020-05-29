
require('dotenv').config();
const mongoose = require('mongoose');
const noteSchema = require('../models/notes-schema.js');
const MONGODB_URL = process.env.MONGODB_URL;
mongoose.connect(MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

class Notes {
    constructor(note) {

    }
    execute(notes) {

        let expAdd = /^add$|^a$/ig;
        let expDelete = /^delete$/ig;
        let expList = /^list$/ig;
        if (notes) {
            if (expAdd.test(notes.action)) {
                return this.add(notes);
            } else if (expList.test(notes.action)) {
                return this.list(notes);
            } else if (expDelete.test(notes.action)) {
                return this.delete(notes);
            }
        }

    }


    async add(adds) {

        let newN = {
            text: adds.payload,
            category: adds.category,
        };
        const noteDb = new noteSchema(newN);
        await noteDb.save();
        console.log('Note : ', noteDb.text);
        mongoose.disconnect();
    }
    // async list(lists){

    // }
    async delete(del) {
        try {
            await noteSchema.findOneAndDelete({ _id: del.payload });
            mongoose.disconnect();
        } catch (error) {
            console.log('not correct id');
            mongoose.disconnect();

        }

    }
}



module.exports = Notes;