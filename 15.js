function fibonacci(n) {
    if (n <= 1) {
        return n; 
    } else {
        return fibonacci(n - 1) + fibonacci(n - 2); 
    }
}
let n = 10;
let result = fibonacci(n);
console.log(result);
