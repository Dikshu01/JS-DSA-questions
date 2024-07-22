//program to remove the last element from an array without using the pop()
let arr = [12,4,45,65,66,43,22,8,67]
console.log(arr.length);
function poparr(){
 arr.length = arr.length-1;   
}
poparr();
console.log(arr);
