'use strict';

function countSameElements(collection) {
  var count = 1;
  var array=new Array();
  var p = 0;
  var json_data ;
  for (var i = 0; i < collection.length;  i++) {
    if(collection[i].length==1){
    var key = collection[i];
    if (key != collection[i + 1]) {
      json_data={'key':key,'count':count};
      array[p++]=json_data;
      count=1;
    } 
    else {
      count++;
    } 
  }
  else{
    key=collection[i][0];
    var chars=collection[i].split("-");
    count=parseInt(chars[1]);
    if(collection[i]!=collection[i+1]){
    json_data={'key':key,'count':count};
    array[p++]=json_data;
    count=1;
  }
  else {
    count++;
  }
}
  }
  return array;
}
