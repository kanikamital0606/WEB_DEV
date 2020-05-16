let arr = [4,14,17,23,48,66];

// map => elem+1
const map = arr.map(x => x+1);
// map => elem -1
const map1 = arr.map(x => x-1);
console.log(map);
console.log(map1);
console.log("`````````````````````````````");
///
// map => elem+1
// odd => elem -1
function transformer(num) {
    if (num % 2 == 0) {
        return num + 1
    } else {
        return num - 1;
    }
}
function test(number) {
    for (let div = 2; div * div <= number; div++) {
        if (number % div == 0) {
            // console.log("Number is not prime");
            return false;
        }
    }
    return true;
}
// The map() method creates a new array populated with the results of calling 
// a provided function on every element in the calling array.
let tArr = arr.map(transformer);
// The filter() method creates a
//  new array with all elements that pass the test implemented by the provided function.
let pArr = tArr.filter(test);
console.log(arr);
console.log("`````````````````````````````");
console.log(tArr);
console.log("````````````````````````````````````");
console.log(pArr);