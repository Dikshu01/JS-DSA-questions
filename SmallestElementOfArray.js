//program to find the smallest element from an array
let arr = [23,21,76,7,8,9,44,34,22,12,10,94,36,97]
let Small = arr[0];

for(let i = 0; i< arr.length; i++){
 
    if(arr[i]< Small){
        Small = arr[i];
        // console.log(Big);
    }
}
console.log(Small);
