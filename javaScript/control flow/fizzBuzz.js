//divisible by 3 => fizz;
//divisible by 5 => buzz;
//divisible by both 3 and 5 => fizzbuzz;
//not divisible by both 3 and 5 => return iinput
//Nan => not a number


const output = fizzBuzz (false);
console.log(output);


function fizzBuzz(input){

    if(typeof input !== 'number')
        return NaN;
    
    if((input%3 ===0) && (input%5 ===0))
        return 'FizzBuzz';
        
    
    if(input%3 ===0)
        return 'Fizz';
    
    if(input%5 ===0)
        return 'Buzz';
    
    return input;
}