const arr=[1,2,3,4,5];
const arr1=[4,5,6,7,8];
function distinct(arr){
    let set=new Set();
    for(let i=0; i<arr.length; i++){
        set.add(arr[i]);
    }
    for(let i=0; i<arr1.length; i++){
        set.add(arr1[i]);
    }
    return set;
}
console.log(distinct(arr));