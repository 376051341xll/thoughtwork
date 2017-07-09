'use strict';//shixian

function collectSameElements(collectionA, collectionB) {

 const A=new Array();
 const Astr=","+collectionA.toString()+",";
 const Bstr=","+collectionB.toString()+",";
 for(var i in collectionA){
     if(Bstr.indexOf(","+collectionA[i]+",")<0){
        }
          else{
                A.push(collectionA[i]);
                }
        }

  return A;


}
 
    



