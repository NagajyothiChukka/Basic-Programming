function checkPrime(num) {
    for(let i=2; i<=num-1; i++){
       if(num%i==0){
        return false;
       }
    }
    return true;
}
console.log(checkPrime(8));

function evenOdd(num) {
      
      // checks if its even number
        if(num % 2 === 0) {
            return true; // Even number
        } else {
            return false; // odd number
        }
      
}
console.log(evenOdd(4));
console.log(evenOdd(1));