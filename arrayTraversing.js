//JS program to find postion of the element and also the previous and next element of the given element.
let arr = [10, 19, 12, 34, 56, 78, 98, 77, 66, 87, 90];

let pos;
function find(value) {
  for (let i = 0; i < arr.length; i++) {
    if (value == arr[i]) {
      console.log(i);
      console.log(arr[i + 1]);
      console.log(arr[i - 1]);
    }
  }
}
find(66);
