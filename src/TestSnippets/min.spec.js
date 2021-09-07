const min = require('C:/Users/Kainat5675/Desktop/utility-js-master/src/Codesnippets/min');

describe('Min',() => {

    it('Min of [] is null',() =>{
        expect(min([])).toEqual(null);

    });

    it('Min of Array of length greater than or equal to one returns smallest element',() =>{
        expect (min([3,2,6])).toEqual(2);

    });
});

