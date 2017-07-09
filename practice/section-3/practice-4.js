'use strict';

function createUpdatedCollection(collectionA, objectB) {
  var A=countSameElements(collectionA);
  const arrtoo=new Array();
  var j=0;
  var k,c;
  for(var i=0;i<A.length;i++){
    var a=A[i];
    k=a.key;
    c=a.count;
    var oB=new Array();
    oB=objectB.value;
    for(var x in oB){
      if(k==oB[x])
        c=c-parseInt(c/3);
    }
      arrtoo[j++]={"key":k,"count":c};
  }
   return arrtoo;
}
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
