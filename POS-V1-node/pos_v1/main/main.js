'use strict';
//1.匹配商品编号
function printReceipt(inputs) {
  let count = statistics(inputs);
  let allItems = loadAllItems();
  let promotions = loadPromotions();
  let sum = 0.00;
  let primeCost = 0.00;

  count.forEach(item => {
    allItems.forEach(data => {
      if (item.key === data.barcode) {
        item.name = data.name;
        item.unit = data.unit;
        item.price = parseFloat(data.price).toFixed(2);
        item.subtotal = (parseFloat(item.price) * item.count);
      }
    })
    primeCost += item.subtotal;
    promotions[0].barcodes.forEach(data => {
      if (isDiscount(item, data)) {
        item.subtotal = item.price * (item.count - 1)
      }
    })
    sum += (item.subtotal);
  })
  let expectText = splicedCharacter(count, sum, primeCost);

  console.log(expectText);
}
// 2.计算数量
function statistics(inputs) {
  let array_key = [];
  let count = [];

  inputs.forEach(item => {
    array_key.push(item.split("-"))
  })
  array_key.forEach(data => {
    if (data[1] === undefined)
      data[1] = 1
  })
  array_key.forEach(data => {
    if (!count.find(element => element.key === data[0])) {
      count.push({key: data[0], count: 0, name: '', unit: '', price: 0.00, subtotal: 0.00})
    }
  })
  count.forEach(item => {
    array_key.forEach(data => {
      if (item.key === data[0]) {
        item.count += parseFloat(data[1])
      }
    })
  })

  return count;
}
//3.计算优惠价格
function isDiscount(item, data) {

  return item.key === data && item.count >= 2;
}
//4.输出
function splicedCharacter(count, sum, primeCost) {
  let expectText = "";

  expectText += `***<没钱赚商店>收据***`;
  count.forEach(item => {
    expectText += `\n名称：${item.name}，数量：${item.count}${item.unit}，单价：${item.price}(元)，小计：${(item.subtotal).toFixed(2)}(元)`;
  })
  expectText += `\n----------------------\n总计：${sum.toFixed(2)}(元)\n节省：${(primeCost - sum).toFixed(2)}(元)\n**********************`;

  return expectText;
}
