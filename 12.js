const arr=[3,-4,5];
function positive(arr){
    for(let i=0; i<arr.length; i++){
        if(arr[i] >= 0){
            console.log(arr[i]);
        }
    }
}
positive(arr);