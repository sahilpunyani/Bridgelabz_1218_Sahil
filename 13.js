const arr=[7,8,9];
let max=0;
for(let i=0; i<arr.length; i++){
    if(arr[i]>max){
        max=arr[i];
    }
}
console.log(max);