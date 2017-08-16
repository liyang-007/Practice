/*日期：2017/08/13
给定一个未排序的整数数组，找到其中位数。
function XXX(arr){}
 */
function findMiddle(arr){
    arr.sort();
    let len = arr.length;
    if(len % 2 === 1){
        return arr[parseInt(len/2)];
    }else{
        return (arr[len/2]+arr[len/2-1])/2;
    }
}
let arr = [3 ,7 ,9 , 2, 4, 1, 5, 8, 6];
console.log('输入数组：' + arr +'\n' + findMiddle(arr));