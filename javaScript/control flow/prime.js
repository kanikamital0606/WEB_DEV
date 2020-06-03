Showprimes(20);

function Showprimes(limit){
    for (let number = 2; number <= limit; number++){
        if (isPrime(number))console.log(number);
    }

    function isPrime(number){
        for (let factor = 2; factor < number; factor++){
            if (number%factor ===0)
                return false;
        }
        return true;
    }
}

//     for (let number = 2; number*number <= limit; number++){
//         if(limit%number===0){
//             console.log("Number is not prime");
//             return;
//         }
//         console.log("Number is prime");       
//     }
// }