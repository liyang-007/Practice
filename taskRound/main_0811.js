/*日期：2017/08/11
 题目：给出链表 1->2->3->3->4->5->3, 和 val = 3, 你需要返回删除3之后的链表：1->2->4->5。
 function XXX(str,val){}
 */

function chainMake(str, val) {
    let cut = [];
    let array = str.split("->");

    for (let item of array) {
        if (item != val) {
            cut.push(item);
        }
    }

    let result = '' + cut[0];
    for (let i = 1; i < cut.length; i++) {
        result += '->' + cut[i];
    }
    return result;
}
var chain = '1->2->3->3->4->5->3';
var val = 3;
console.log(chainMake(chain, val));