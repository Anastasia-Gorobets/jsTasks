/**
 * Created by Nastya on 20.01.2017.
 */
/*
 Write a function 'isSomeTrue', which takes 2 parameters - 'source' and 'filterFn', where the 'source' - array, 'filterFn' - filter function
 If the filter function returns 'false' for all array elements, itself 'isSomeTrue' return 'false'
 If the filter function returns 'true' for at least one element of the array, then itself 'isSomeTrue' return 'true'
 Throw and handle an exception if 'source' empty array
 */
/*
 * @param {array} x
 * @return {boolean}
 */
function isSomeTrue(arr,filerFunction) {
    if(arr.length===0)throw new Error("Array is empty");
    var count=0;
    for(var i=0;i<arr.length;i++){
        if(filerFunction(arr[i])){
            count++;
        }
    }
    if(count===0)return false;
    return true;
}