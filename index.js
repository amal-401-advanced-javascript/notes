'use strict';
const Input = require('./lib/input.js');
const Notes = require('./lib/notes.js');

const newObject = new Input();

const newNote = new Notes(newObject);

newNote.execute(newObject);
newNote.add(newObject);