//program to find the largest element from an array
let arr = [23,21,76,7,8,9,44,34,22,12,10,94,36,97]

let Big = 0;
for(let i = 0; i< arr.length; i++){
    if(arr[i]>Big){
        Big = arr[i];
        // console.log(Big);
    }
}
console.log(Big);
