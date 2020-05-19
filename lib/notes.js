class Notes {
    constructor(note) {

    }
    execute(notes) {
        if (notes) {
            let test = /^add|^a$/ig;
            // console.log('new note added', notes);
            if (test.test(notes.action)) {
                this.add(notes);
            }
        }
    }

    add(adds) {
        if (adds) {
            if (adds.payload) {
                let newN = {
                    id: Math.ceil(Math.random() * 10),
                    note: adds.payload
                };
                console.log('The message: ', newN.adds);

            }
        }
    }
}

module.exports = Notes;