const reduce = require('C:/Users/Kainat5675/Desktop/utility-js-master/src/Codesnippets/reduce');

describe('Reduce', () => {

    it('reduce([],(x,y)=>x+y) should be undefined', () => {
        expect(reduce([], (x,y)=>x+y)).toEqual(undefined);
    });

    it('reduce([], (x,y)=>x+y,10) should be 10', () => {
        expect(reduce([], (x,y)=>x+y, 10)).toEqual(10);
    });

    it('reduce([a,b,c],(x,y)=>x+y) should be abc', () => {
        expect(reduce(['a','b','c'],(x,y)=>x+y),).toEqual('abc');
    });
    
    it('reduce([a,b,c],(x,y)=>x+y, z) should be zabc', () => {
        expect(reduce(['a','b','c'],(x,y)=>x+y, 'z'),).toEqual('zabc');
    });
    
    it('reduce([1,2],v(x,y)=>x+y,10) should be 12', () => {
        expect(reduce([1,2],(x,y)=>x+y, 10)).toEqual(13);
    });

    it('reduce([],v(x,y)=>x+y,10) should be 10', () => {
        expect(reduce([],(x,y)=>x+y, 10)).toEqual(10);
    });

})