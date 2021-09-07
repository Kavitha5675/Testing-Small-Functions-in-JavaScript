function minimum(a,b){
    if(a<b)return a;
    return b;
}

function minimum_element(arr,len){
    if(len==1)return arr[0];
    return minimum(minimum_element(arr,len-1),arr[len-1]);
}

const min = (arr) =>
{
    if(arr.length==0)return null;
    return minimum_element(arr,arr.length);
}

module.exports=min;