//program to remove an element from the desired pos of an array
let arr = [12, 4, 45, 65, 66, 43, 22, 8, 67];

function rem_element(pos){

    for (let i = pos; i < arr.length; i++) {
     
        arr[i] = arr[i+1];

    }
    arr.length--;
}
console.log(arr);
rem_element(4);
console.log(arr);
