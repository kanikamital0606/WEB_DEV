//fun ka intro
//Function Statement
function hello(greeter){
    console.log("Hello from " + greeter);
    return true;
    //return undefined;
}
//let rval = hello("Steve");
//console.log(rval);

let arr=[1,2,3,4,5,6,7];
console.log(hello);  //output=> [Function: hello]
hello=arr;
console.log(hello); //output=> [1,2,3,4,5,6,7];
// *****************************************************************************************
//************************functions are first class citizens************
// ***********************functions are variable***********************

// Assign a value to  a variable 
/***************EXAMPLE 1
let a = 10;
b = a;
console.log(b);  //output:10; 

//***************EXAMPLE 2************/
let a = [1, 2, 3, 4, 5];
b = a;
// console.log(b); //[1, 2, 3, 4, 5];

//  func definition address copy 
let greeter = function sayHi() {
    console.log("function expression");
}
/*
let greeter=10; //Error 'greeter' has already been declared
//*******************function address
console.log(greeter); //[Function: sayHi]
console.log(greeter + ""); //function sayHi() {console.log("function expression");}

//***************************function execute => returned value
console.log(greeter());  //undefined
*/
//**************variable can be passed as a parameter
//************* functions can be passed as a parameter
function myfun(varName){
    console.log("I am " + varName);
    console.log( "I am " + varName());
    console.log("I am waiting for line 41");  
}
// myfun("Hello");
// myfun(true);
// myfun(null);
// myfun(10);
// myfun("Hello", "all", "How", "are", "you");
myfun(function sayHi(){
    let x=5;
    x++;
    console.log(x);
    console.log("function expression");
});
//     /*console.log("I am code inside sayHi and will only run when sayHi is called");*/
// });