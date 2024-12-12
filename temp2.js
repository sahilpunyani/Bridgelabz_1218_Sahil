function convert(fahrenheit) {
    let celsius = (fahrenheit - 32) * 5 / 9;
    return celsius;
}
let fahrenheit = 10;
let celsius = convert(fahrenheit);
console.log(celsius);

