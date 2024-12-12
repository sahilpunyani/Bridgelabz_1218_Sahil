function isPrime(num){
    if(num < 2){
        return false;
    }
    let i=2;
    for(i=2; i<num; i++){
        if(num%i === 0) return false;
    }
    if(i==num){
        return true;
    }
}
function printPrimes(n){
    let count =0;
    let number =2;
    let sum=0;
    while(count<n){
        if(isPrime(number)){
            sum=sum+number;
            count++;
        }
        number++;
    }
    console.log(sum);
}
printPrimes(100);