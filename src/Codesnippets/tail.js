function find_tail(array,res,traverse,pos)
{
    if(traverse==array.length)return res;
    res[pos++]=array[traverse++];
    return find_tail(array,res,traverse,pos);
}

const tail = (arr) => {
    if(arr.length==0)return null;
    var i=1;
    return find_tail(arr,[],i,0);
}

module.exports=tail;