const arr=[1,2,3,4,5];
function rotate(arr){
    const last= arr.pop();
    arr.unshift(last);
    return arr;
}
console.log(rotate(arr));