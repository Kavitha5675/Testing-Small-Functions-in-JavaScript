const head=require('C:/Users/Kainat5675/Desktop/utility-js-master/src/Codesnippets/head');
const tail=require('C:/Users/Kainat5675/Desktop/utility-js-master/src/Codesnippets/tail');

const map=([head, ...tail],fun) =>{

    if(!head)return [];
    if(tail.length == 0)
        return [fun(head)];
        
    return [ fun(head) ].concat(map(tail, fun));

}

module.exports=map;