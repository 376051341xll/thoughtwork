'use strict';

function countSameElements(collection) {

  const A=new Array;
  const B=new Object;
  var count;

 for(var i=0,len=collection.length,key;i<len;i++)
 {
  key=collection[i];
  if(!!B[key])
    {B[key]++;}
   else
     {B[key]=1;}
 }

 for(var item in B)
 {
 A.push({
        key:item.split('-')[0],
        count:B[item]
      })
  }

 return A;
}
