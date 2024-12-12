// const arr1=[1,2,3,4,5]
// const arr2=[1,5,8,7,5]
// function num(arr1,arr2){
//     let i=0;
//     let j=0;
//     while(i<arr1.length || j<arr2.length){
//         if(arr1[i]!=arr2[j]){
//             arr.push(arr1[i]);
//             arr.push(arr2[j]);

//         }
//         i++;
//         j++;
//     }
// }

// let arr=[]
// arr1.sort;
// arr2.sort;
// num(arr1,arr2); 
// console.log(arr);

let arr=[1,2,3,4,5,6,7,8];
let arr2=[5,6,7,8,9,10,11];
function num(arr,arr2){
for(let i=0; i<arr.length; i++){
    if(!arr2.includes(arr[i])){
        console.log(arr[i]+" ");
    }
}
for(let i=0; i<arr2.length; i++){
    if(!arr.includes(arr2[i])){
        console.log(arr2[i]+" ");
    }
}
}
console.log(num(arr,arr2));