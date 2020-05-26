let arr = [4, 14, 17, 23, 48, 66];
function myFilter(arr, cb) {
    let narr = [];
    for (let i = 0; i < arr.length; i++) {
        if (cb(arr[i]) == true) {
            narr.push(arr[i]);
        }
    }
    return narr;
}

//create function test to test prime in array
function test(number) {
    for (let div = 2; div * div <= number; div++) {
        if (number % div == 0) {
            // console.log("Number is not prime");
            return false;
        }
    }
    return true;
}
//filter prime nos => here 17,23
let pArr = myFilter(arr, test);
console.log(pArr);