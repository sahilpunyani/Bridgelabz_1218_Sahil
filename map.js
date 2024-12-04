//Map : To Transform the array
const arr=[5,1,3,2,6];

//double =[10,2,6,4,12]
//triple =[15,3,9,6,18]
//binary =["101","1","11","10","110"]

function double(x){
    return x*2;
}
const output = arr.map(double);
console.log(output);

function triple(y){
    return y*3;
}
const output1 =arr.map(triple);
console.log(output1);

function binary(z){
    return z.toString(2);
}
const output2 = arr.map(binary);
console.log(output2);

//FILTER function use to filter the value of array

const arr1 =[5,1,3,2,6];

function isOdd(a){
    return a%2;
}
const output3 = arr.filter(isOdd);
console.log(output3);

function isEven(b){
    return b%2 === 0;
}
const output4 = arr.filter(isEven);
console.log(output4);

//same function in arrow function 

const output5 = arr.filter((x) => x>4);
console.log(output5);

//REDUCE 
//sum of array
function findSum(arr){
    let sum =0;
    for(let i =0; i<arr.length; i++){
        sum=sum+arr[i];
    }
    return sum;
}
console.log(findSum(arr));

const output6 = arr.reduce(function(acc,curr){   //acc = accumulator = sum && curr =current = arr[i]
    acc=acc+curr;
    return acc;
},0);
console.log(output6);

//Max value
function findMax(arr){
    let max =0;
    for(let i =0; i<arr.length; i++){
        if(arr[i] > max){
            max = arr[i];
        }
    }
    return max;
}
console.log(findMax(arr));

const output7 = arr.reduce(function(max,curr){
    if(curr > max){
        max = curr;
    }
    return max;
},0);

console.log(output7);  

const users = [
    {firstName: "sahil",lastName: "punyani",age:21 },
    {firstName: "gaurav",lastName: "chawla",age:22},
    {firstName: "gavish",lastName: "thapar",age:23 },
    {firstName: "iron",lastName: "man",age:21},
];
const output8 = users.map((s)=> s.firstName + " " + s.lastName);
console.log(output8);

const output9 = users.reduce(function(acc,curr){
    if (acc[curr.age]){
        acc[curr.age] = ++acc[curr.age];
    }else{
        acc[curr.age] = 1
    }
    return acc;
},{});

console.log(output9);

const output10 = users.filter((d) => d.age < 30).map((d) => d.firstName);
console.log(output10);

//Map, Set, Weakset and Weakmap
//Map: map is a method of array object ,we can use any type of key or value.
//Set: It contains only unique values.The value can be of any type, primitive value or object.
//object constructor

const myMap = new Map();

const key1 = 'myStr',key2 = {}, key3 = function(){};
//setting map value
myMap.set(key1, 'this is a string');
myMap.set(key2, 'this is a blank obj');
myMap.set(key3, 'this is an empty function');

console.log(myMap);

//for value
let value1 = myMap.get(key1);
console.log(value1);
let value2 = myMap.get(key2);
console.log(value2);
let value3 = myMap.get(key3);
console.log(value3);

//for size
console.log(myMap.size);

//using for of loop
for(let [key,value] of myMap){
    console.log(key,value);
}

//only keys 
for(let key of myMap.keys()){
    console.log(key);
}

//only value
for(let value of myMap.values()){
    console.log(value);
}

//for each loop 
myMap.forEach((value,key) => {
    console.log(key);
    console.log(value);
})

// converting to array
let myArray = Array.from(myMap);
console.log(myArray);
