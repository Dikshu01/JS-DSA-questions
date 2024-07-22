//program to remove the first element from the element without using shift()
let arr = [12, 4, 45, 65, 66, 43, 22, 8, 67];
function shifftarr() {
  for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i + 1];
  }

  arr.length--;
}
shifftarr();
console.log(arr);
