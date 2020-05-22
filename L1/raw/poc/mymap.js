let arr = [4, 14, 17, 23, 48, 66];
function transformer(num) {
    if (num % 2 == 0) {
        return num + 1
    } else {
        return num - 1;
    }
}

function squarer(x) {
    return x * x;
}

function mymap(arr,cb){  //mymap = new array
    let newarr = [];
    for (let i = 0; i < arr.length; i++) {
        let retVal = cb(arr[i]);
        newarr.push(retVal);       
    }
    return newarr;
}

//mymap(arr, transformer);
///////

function myFilter(arr, cb) {
    let narr = [];
    for (let i = 0; i < arr.length; i++) {
        if (cb(arr[i]) == true) {
            narr.push(arr[i]);
        }
    }
    return narr;
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

console.log(arr);
console.log("````````````````````````");
let tArr = mymap(arr, transformer);
console.log(tArr);
console.log("````````````````````````");
console.log(mymap(arr, squarer)); //square of arr [ 16, 196, 289, 529, 2304, 4356 ]
let pArr = myFilter(tArr, test);
console.log(pArr);
// arr.mymap(transformer);
// arr.map()
// parent => feature => inherit childrens
// Array.prototype.

