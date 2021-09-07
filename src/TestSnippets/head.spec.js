const head = require('C:/Users/Kainat5675/Desktop/utility-js-master/src/Codesnippets/head');

describe('Head',() => {

    it('Head of [] is null',() =>{
        expect(head([])).toEqual(null);

    });

    it('Head of Array of length one or greater than one returns first element',() =>{
        expect (head([3,2,6])).toEqual(3);

    });
});



