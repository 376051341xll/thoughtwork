'use strict';

function countSameElements(collection) {
  var array=new Array();
  var p = 0;
  var count=1;
  var json_data;
  for (var i = 1; i < collection.length;  i++) {
    var key=collection[i-1];
    var k1 = key.replace(/[^a-z]+/ig, "");
    if(k1!=collection[i].replace(/[^a-z]+/ig, "")) {
      if(key.replace(/[^0-9]/ig,"")!="")
       count=count+parseInt(key.replace(/[^0-9]/ig,""))-1;
      json_data={'name':k1,'summary':count};
      array[p++]=json_data;
      count=1;
    } //if
    else {
      var num=key.replace(/[^0-9]/ig,"");
      if(num=="")
      count++;
      else {
        count=count+parseInt(num);
      }
    }
    var k=collection[collection.length-1].replace(/[^a-z]+/ig, "");
    num=collection[collection.length-1].replace(/[^0-9]/ig,"");
    if(k!=k1){
      json_data={'name':k,'summary':parseInt(num)};
      array[p]=json_data;
    }
    else{
      count=count+parseInt(num);
      json_data={'name':k1,'summary':count};
      array[p++]=json_data;
    }
  }//for
  return array;
}
