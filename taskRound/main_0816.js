/*日期：2017/08/16
 题目：找出数组 arr 中重复出现过的元素
 例如：arr = [‘a’, ‘ab’, ‘ed’, ‘da’, ‘a’, ‘ed’, ‘b’];输出：‘a’, ‘ed’
 */
function findElements(arr){
    let newArr = arr.filter((ele, index) => arr.lastIndexOf(ele) !== index);
    return newArr;

}
arr = ['a', 'ab', 'ed','da', 'a', 'ed', 'b'];
console.log('数组 arr = ' + arr + ' 中重复出现过的元素为： ' + findElements(arr));