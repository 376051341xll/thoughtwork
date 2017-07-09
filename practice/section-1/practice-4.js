'use strict';

function collectSameElements(collectionA, objectB) {
 const A=new Array();
 const C=new Array();
 const B=new Array();
 for(var n in collectionA)
 {
  B.push(collectionA[n].key);
 }
 for(var j in objectB)
 {
  C.push(objectB[j]);
 }
 const Astr=","+B.toString()+",";
 const Bstr=","+C.toString()+",";
 for(var i in collectionA){
     if(Bstr.indexOf(","+B[i]+",")<0){
        }
          else{
                A.push(B[i]);
                }
        }

  return A;
}
