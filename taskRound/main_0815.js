/*日期：2017/08/15
 题目：统计数组 arr 中值等于 item 的元素出现的次数
 例如：arr = [1, 3, 7, 1 ,4,] , item = 1,item出现的次数为2
 要求：不要使用for循环
 */
function countNum(arr,item){
    let array = arr.filter(num => num === item);
    return array.length;
}
arr = [1, 3, 7, 1 ,4,];
item = 1;
console.log('数组 arr = [' + arr + '] 中 item = ' + item + ' 出现的次数为\n' + countNum(arr,item));