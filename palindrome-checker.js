function palindrome(str) {
  //
;
  
var result = str.match(/[A-Za-z0-9]/g);
var secondresult= str.match(/[A-Za-z0-9]/g);


result = result.map(name => name.toUpperCase());
secondresult = secondresult.map(name => name.toUpperCase());

result.reverse();
console.log(result)
console.log(secondresult)
for(let i=0;i<result.length;i++){
  if(result[i]!==secondresult[i]){
return false;
  }
}
return true;

}

palindrome("A man, a plan, a canal. Panama")