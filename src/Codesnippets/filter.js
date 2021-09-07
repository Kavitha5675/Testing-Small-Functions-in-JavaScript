function get_filter_array(arr,fun,res,index)
{
    if(index==arr.length)return res;

    if(fun(arr[index]))res.push(arr[index]);

    return get_filter_array(arr,fun,res,index+1);
}


const filter = (arr,fun) => {
    let res=[]
    return get_filter_array(arr,fun,res,0);

}

module.exports=filter;