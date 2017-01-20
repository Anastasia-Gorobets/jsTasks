/**
 * Created by Nastya on 20.01.2017.
 */
/*
 Write a function `isAllTrue`, which takes 2 parameters:` source` and `filterFn`, where` source` - array, `filterFn` - filter function
 If the filter function returns `true` for all elements of the array, then itself` isAllTrue` returns `true`
 If the filter function returns `false` at least one element of the array, then itself will return` `isAllTrue` false`
 Throw and handle an exception if 'source' empty array
 */
/*
 * @param {array} x
 * @return {boolean}
 */

function isAllTrue(arr,filerFunction) {
    if(arr.length===0)throw new Error("Array is empty");
    var flag=true;
    for(var i=0;i<arr.length;i++){
        if(!filerFunction(arr[i])){flag=false;}
    }
    if(flag===true)return true;
    return false;
}