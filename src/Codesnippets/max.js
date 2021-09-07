function maximum(a,b){
    if(a>b)return a;
    return b;
}


function maximum_element(arr,len){
    if(len==1)return arr[0];
    return maximum(maximum_element(arr,len-1),arr[len-1]);
}

const max = (arr) =>
{
    if(arr.length==0)return null;
    return maximum_element(arr,arr.length);
}

module.exports=max;