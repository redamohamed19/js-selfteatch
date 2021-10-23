function sumPrimes(num) {
  var prime_numbers=[];
  var sum=0;
  function isPrime(num){
    for(let i=2;i<=Math.sqrt(num);i++){
      if(num%i==0){
        return false;
      }
      
    }
    return true;
  }
 for(let i=2;i<=num;i++){
   if(isPrime(i)){
     sum=sum+i;
   }
 }
 console.log(sum)
 return sum;
}

sumPrimes(977);