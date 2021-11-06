function rot13(str) {
  var array=[];
  var binaryArray=[];
  var secondArray=[];
  array=str.split("");
for(let i=0;i<str.length;i++){
binaryArray.push(str.charCodeAt(i))
}
console.log(array)
console.log(binaryArray)

for(let i=0;i<binaryArray.length;i++){
   
if(binaryArray[i]<=90 && binaryArray[i]>=65){
 let a= binaryArray[i];
  binaryArray[i]-=13
  if(binaryArray[i]<65){
   console.log(a)
    let temp=a-65
    let temp2=temp-13
    binaryArray[i]=90+temp2+1
  }
  // 69 -65=4   4-13=9-   90-9=81
  //82
}
}
console.log(binaryArray)


for(let i=0;i<binaryArray.length;i++){
   secondArray.push(String.fromCharCode(binaryArray[i]))

}

 // 97 122
  
  console.log(binaryArray)
  console.log(secondArray)
  str=secondArray.join("")
  return str;
}

rot13("SERR PBQR PNZC");