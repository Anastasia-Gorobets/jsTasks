/**
 * Created by Nastya on 20.01.2017.
 */
/**
 * @param {number} x
 * @return {number}
 */
/*
 Example1: x = 1234, return 10
 Example2: x = -12, return 1
 */
function sumOfNumbers(x){
    if(isNaN(x))return "This is not a number!";
    var tmp=x.toString().split('');
    var sum = 0;
    var i;
    if(tmp[0]==='-') {
        for (i = 2; i < tmp.length; i++) {
            sum += (+tmp[i]);
        }
        sum+=-(+tmp[1]);
    }else{
        for (i =0; i < tmp.length; i++) {
            sum += (+tmp[i]);
        }
    }
    return sum;
}
console.log(sumOfNumbers(-12));
