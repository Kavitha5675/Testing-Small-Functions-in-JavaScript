const max = require('C:/Users/Kainat5675/Desktop/utility-js-master/src/Codesnippets/max');

describe('Max',() => {

    it('Max of [] is null',() =>{
        expect(max([])).toEqual(null);

    });

    it('Max of Array of length greater than or equal to one returns maximum element',() =>{
        expect (max([3,2,6])).toEqual(6);

    });
});

