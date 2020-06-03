showNumbers(10);

function showNumbers(limit){
    for (let i = 0; i <= limit; i++){

        const message = (i %2 ===0) ? 'EVEN' : 'ODD'; 
        console.log(i, message);

        // //odd
        // if(i %2 ===0){
        //     console.log('even')
            
        // }
        // else{
        //     console.log('odd');
        // }
    }
}