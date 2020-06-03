
const marks = [80, 60,50];
console.log(callculatedGrade(marks));                                                                  

function callculatedGrade(marks){
   const average = calculatedAverage(marks); 
   if(average < 60) return 'F';
   if(average < 70) return 'D';
   if(average < 80) return 'C';
   if(average < 90) return 'B';
   return 'A';
}


//Function to calculate average
function calculatedAverage(array){
    let sum = 0;
    for(let value of array){
        sum+=value;       
    }
    return sum/array.length;
}