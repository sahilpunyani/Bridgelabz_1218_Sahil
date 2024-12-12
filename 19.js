function isPrime(num) {
    if (num < 2) return false;
    for (let i = 2, sqrt = Math.sqrt(num); i <= sqrt; i++) {
        if (num % i === 0) return false;
    }
    return true;
}
    let n=20;
    let p=8;
    let j=0;
    while(j<p){
        if(isPrime(n)){
            console.log(n);
            j++;
        }
        n++;
    }