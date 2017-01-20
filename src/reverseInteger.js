/**
 * Created by Nastya on 20.01.2017.
 */
/**
 * @param {number} x
 * @return {number}
 */
/*
 Example1: x = 123, return 321
 Example2: x = -123, return -321
 */
var reverse = function(x) {
    var str="";
    var num = "";
    if(x.toString()[0]==='-'){
        str = x.toString().substr(1,x.toString().length).split('').reverse();
        for (var i = 0; i < str.length; i++) {
            num += str[i];
        }
        num='-'+num;
    }else{
        str=x.toString().split('').reverse();
        for(var i=0;i<str.length;i++){
            num+=str[i];
        }
        num= (+num);
    }
    return num=parseInt(num,10);
};

console.log(reverse(-123));
console.log(reverse(123));