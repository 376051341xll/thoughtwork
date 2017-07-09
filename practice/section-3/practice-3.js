'use strict';

function createUpdatedCollection(collectionA, objectB) {
  var A=Collection(collectionA);
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
  function Collection(collection){
  var count = 1;
  var array=new Array();
  var p = 0;
  var json_data ; 
  for (var i = 0; i < collection.length;  i++) {
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
  return array;
}
