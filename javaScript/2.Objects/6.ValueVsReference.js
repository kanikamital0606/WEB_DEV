// PRIMITIVES ARE COPIED BY THEIR VALUES
// OBJECTS ARE COPIED BY THEIR REFERENCE

//PRIMITIVES EXAMPLE
let x=10;
let y=x;
x=30;
console.log(x,y); //30 10 

//Reference EXAMPLE
let a = {value : 10};
let b = a;
a.value=30;  //Update value of X with 30
console.log(a,b); //30 10 

/***************************PRIMITIVES EXAMPLE 2****************************/

let number=10;
function increased (number){
    number++;
}
increased(number);
console.log(number);//10 

/***************************REFERENCE EXAMPLE 2****************************/

let obj=10;
function increased (obj){
    obj.value++;
}
increased(obj);
console.log(obj); //10 