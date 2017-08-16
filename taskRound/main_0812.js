/*日期：2017/08/12
 题目: 打印出所有的"水仙花数"，所谓"水仙花数"是指一个三位数，
 其各位数字立方和等于该数本身。例如：153是一个"水仙花数"，
 因为153=1的三次方＋5的三次方＋3的三次方。
 */
function calculateNum(num) {
    let a = num % 10;
    let b = parseInt(num / 10) % 10;
    let c = parseInt(num / 100);
    if(num === a*a*a + b*b*b +c*c*c){
        return true;
    }
    return false;
}
function printNum(){
    let str = '';

    for(let i = 100; i < 1000; i++){
       if( calculateNum(i)){
           str += i + ' ';
       }
    }
    return str;
}

console.log(printNum());