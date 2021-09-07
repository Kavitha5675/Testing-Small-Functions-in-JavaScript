const tail = require('C:/Users/Kainat5675/Desktop/utility-js-master/src/Codesnippets/tail');

describe('Tail',() => {

    it('Tail of [] is null',() =>{
        expect(tail([])).toEqual(null);

    });

    it('Tail of Array of length one or greater than one returns remaining elements rather than first',() =>{
        expect (tail([3,2,6])).toEqual([2,6]);

    });
});



