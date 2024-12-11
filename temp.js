function convert(celsius) {
    let fahrenheit = (celsius * 9/5) + 32;
    return fahrenheit;
}

// Example usage:
let celsius = 15;
let fahrenheit = convert(celsius);
console.log(fahrenheit);
