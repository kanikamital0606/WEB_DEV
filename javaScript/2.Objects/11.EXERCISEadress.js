//Street
//City
//zipCode
//showAddress(address)


let address = {
    street : 'abc',
    city : 'Delhi',
    zipcode : 11556 
};

function showAddress(address){
    for(let key in address)
        console.log(key, address[key]);
}

showAddress(address);