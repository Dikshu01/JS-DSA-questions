//adding new element in an array without using push()
let arr = [12, 23, 4, 5, 32, 67, 77];
console.log(arr.length);

function pusharr(val) {
  arr[arr.length] = val;
}

pusharr(66);
console.log(arr);
