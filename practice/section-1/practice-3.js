'use strict';

function collectSameElements(collectionA, objectB) {
 const A=new Array();
 const C=new Array();
 for(var j in objectB)
 {
  C.push(objectB[j]);
 }
 const Astr=","+collectionA.toString()+",";
 const Bstr=","+C.toString()+",";
 for(var i in collectionA){
     if(Bstr.indexOf(","+collectionA[i]+",")<0){
        }
          else{
                A.push(collectionA[i]);
                }
        }

  return A;
}
