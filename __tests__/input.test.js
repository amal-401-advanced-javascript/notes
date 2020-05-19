'use strict';

const minimist = require('minimist');
const Input = require('../lib/input.js');
jest.mock('minimist');

minimist.mockImplementation(() =>{
    return {
        add: 'Notesy',
    };

});
// '(add) & (note) are invalid'
// '(add) & (note) are valid'
describe('INPUT MODULE' , () => {
    it( 'If the command (add) and data (the note) were both valid', () =>{
        let inputObject = new Input();
        expect(inputObject.valid()).toBeTruthy();
    });
    it('If the command (add) and data (the note) were both invalid',() =>{
        let inputObject = new Input();
        inputObject.action = 'invalid action';
        inputObject.payload = 'invalid payload';
        expect(inputObject.valid()).toBeFalsy();
    });

});