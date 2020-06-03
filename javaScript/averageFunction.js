//Function to calculate average
function calculatedAverage(array){
    let sum = 0;
    for(let value of array){
        sum+=value;       
    }
    return sum/array.length;
}