'use strict';

require('@code-fellows/supergoose');
const Notes = require('../lib/notes.js');
const Input = require('../lib/input.js');
const minimist = require('minimist');
const Note = require('../lib/model/notes-collection.js');

jest.mock('minimist');

minimist.mockImplementation(() => {
  return {
    add: 'Notesy',
    category: 'greetings',
  };
});

jest.spyOn(global.console, 'log');

describe('NOTE MODULE', () =>{
  it('Nothing is logged to the console if there was no command given',() => {
    let noteObject = new Notes();
    noteObject.execute();
    expect(console.log).not.toHaveBeenCalled();
  });
  it('If the command (add) and data (the note) were both valid',() =>{
    let inputObject = new Input();
    let noteObject = new Notes();
    noteObject.execute(inputObject);
    expect(console.log).toHaveBeenCalled();
  });
      
  it('create() => will create a new object and store it in the database', () => {
    let newNote = {
      text: 'Mahmoud',
      category : 'Instructor',
    };
    return Note.create(newNote).then(item=>{
      Object.keys(newNote).forEach(key=>{
        expect(newNote[key]).toEqual(item[key]);
      });
    });
  
  });

  it('get() => will find an object with spacific category', () => {
    let newNote = {
      text: 'Mahmoud',
      category : 'Instructor',
    };
    return Note.create(newNote).then(reccord=>{
      return Note.get({category:reccord.category}).then(item=>{
        Object.keys(newNote).forEach((key,index)=>{
          expect(newNote[key]).toEqual(item[index][key]);
        });
      });
    });
  });
});