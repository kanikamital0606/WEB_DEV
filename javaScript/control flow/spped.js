//speedlimit  = 70;
//every 5 kms = 1 Point;
//Math.Floor convert float to nearest integer
//more than 12 points license suspended 

checkSpeed(130);

function checkSpeed(speed){
    
    const speedlimit = 70;
    const kmerPoint =5;
    
    if(speed < speedlimit + kmerPoint){
        console.log('ok');
        //add return; no need to add else loop
        return;
    }

    //else{
    const points = Math.floor((speed - speedlimit)/kmerPoint);
    
    if(points >= 12){
        console.log('License Suspended');
    }
    else{
        console.log('Points', points);
    }
    //}
}