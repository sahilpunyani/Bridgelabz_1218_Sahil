const arr=[2,3,5,7,9];
function findSum (arr){
    let sum=0;
    for(let i=0; i<arr.length; i++){
        sum=sum+arr[i];
    }
    return sum;
}
console.log(findSum(arr));