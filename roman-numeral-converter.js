function convertToRoman(num) {
  var obj={M:1000,CM:900,D:500,CD:400,C:100,XC:90,L:50,XL:40,X:10,IX:9,V:5,IV:4,I:1}
  var result="";
  for(let i in obj){
   while(obj[i]<=num){
result=result+i;
num=num-obj[i]
   }
  }
  console.log(result)
 return result;
}

convertToRoman(400);