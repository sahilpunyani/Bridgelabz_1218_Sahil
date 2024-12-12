//Print the distance between the first 100 prime numbers
function isPrime(num) {
    if (num < 2)
    {
      return false;
    }
    let i=2;
    for (i = 2;  i<num; i++) {
        if (num % i === 0) return false;
    }
    if(i==num){
    return true;
    }
}

function printPrimes(n) {
    let count = 0;
    let number = 2; // Start with the first prime number
    // let sum=0;
    while (count < n) {
        if (isPrime(number)) {
          // sum=sum+number;
            count++;
        }
        number++;
    }
    console.log(number-3);
    // console.log(sum);
}

printPrimes(100);