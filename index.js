'use strict';
const Input = require('./lib/input.js');
const Notes = require('./lib/notes.js');

let newObject = new Input();

let newNote = new Notes(newObject);

newNote.execute(newObject);
