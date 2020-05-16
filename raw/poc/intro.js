// top to bottom  =>  left to right
//System.out.println()
console.log("Hello ")

//Dynamically typed language
//Primitive Data tpes => number, strings , boolen, null, undefined

let varName; //create vaiable 
varName =10;
varName = "Hello World";
varName = true;
varName = null;
console.log(varName);

// JS=> 10 days=> Java 
// syntax similar to Java =>  for ,while, conditionals 

let number = 22;
for(let i= 2; i*i < number; i++) {

    if(number%i ==0){
        console.log("Nuber is not prime");
        return;
    }
    console.log("Number is prime");
}
