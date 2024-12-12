function calculateSum(n){
    let sum=0;
    while(n>0){
        let last = n%10;
        sum=sum+last;
        n=n/10;
        n=Math.floor(n);
    }
    return sum;
}
console.log(calculateSum(67));