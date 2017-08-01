function count_same_elements(collection) {
  //在这里写入代码
  var key_value = "";
  var count_value = 0;
  var result2=[];

    for (var i = 0; i < collection.length; i++) {
      if (collection[i]!=-1) {
        key_value = collection[i];

        var result1=a(collection, key_value, count_value);
        result2.push(result1);
        count_value=0;
      }
    }
  return result2;
}
 function a(collection,key_value,count_value){
  for(var j=0;j<collection.length;j++){
     if(key_value===collection[j]){

       count_value++;
       collection[j]=-1;
     }
  }
  var result={key:key_value,count:count_value};
   return result;
 }
module.exports = count_same_elements;
