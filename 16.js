function checkPrime(n){
    let i=2;
    for(let i=2; i<n; i++){
        if(i%n==0){
            return false;
        }
        }
        if(i==n){
            return true;
        }
        return false;
    }

console.log(checkPrime(2));