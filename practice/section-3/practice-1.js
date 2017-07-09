'use strict';

function createUpdatedCollection(collectionA, objectB) {
  const arrtoo=new Array();
  var j=0;
  var k,c;
  for(var i=0;i<collectionA.length;i++){
    var a=collectionA[i];
    k=a.key;
    c=a.count;
    var oB=new Array();
    oB=objectB.value;
    for(var x in oB){
      if(k==oB[x])
        c=c-1;
    }
      arrtoo[j++]={"key":k,"count":c};
    
  }
return arrtoo;
}


