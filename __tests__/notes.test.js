'use strict';

const Notes = require('../lib/notes.js');
const Input = require('../lib/input.js');
const minimist = require('minimist');

jest.mock('minimist');

minimist.mockImplementation(() => {
  return {
    add: 'Notesy',
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
});