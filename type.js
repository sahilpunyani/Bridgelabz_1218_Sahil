//TYPE CONVERSION
//Strings to Numbers
//using Number() constructor
let str = "75";
let num = Number(str);
console.log(num);

//using +
let str1 ="23";
let num1 = +str1;
console.log(num1);

//Numbers to Strings
//using string constructor
let num2 = 25;
let str2 = String(num2);
console.log(str2);

//using .tostring
let num3 = 12;
let str3 = num3.toString();  
console.log(str3);

//Dates to Numbers
//date constructor
let date = new Date();
let timestamp = Date.now();  
console.log(timestamp);

//.getTime()
let date1 = new Date();
let t1 = date1.getTime();
console.log(t1);

//Numbers to Dates
//using date()
let t2 = 156783900;
let d1 = new Date(t2);
console.log(d1);

//Date.setTime()
let time1 = 1683808282000;
let date2 = new Date();
date2.setTime(time1);
console.log(date2);

//Booleans to Numbers
//number() constructor
let b1 = true;
let n1 = Number(b1);
console.log(n1);

//+ constructor
let b2 = false;
let n2 = +b2;
console.log(n2);

//Numbers to Booleans
let number = 1;
let boolean = Boolean(number);
console.log(boolean);