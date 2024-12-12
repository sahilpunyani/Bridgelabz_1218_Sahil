const arr=[1,2,3,4,5];
function rotate(arr){
    const first=arr.shift();
    arr.push(first);
    return arr;
}
console.log(rotate(arr));