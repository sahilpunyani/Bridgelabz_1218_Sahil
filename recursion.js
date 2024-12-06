function factorial(n) {
    
    if (n === 0 || n === 1) {
      return 1;
    }
    
    return n * factorial(n - 1);
  }
  
  console.log(factorial(5)); 
  
  //2nd
  function sumArray(arr, index = 0) {
    
    if (index === arr.length) {
      return 0;
    }
    
    return arr[index] + sumArray(arr, index + 1);
  }
  
  const numbers = [1, 2, 3, 4, 5];
  console.log(sumArray(numbers)); 
  