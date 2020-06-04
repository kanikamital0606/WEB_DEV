// let address = {
//     street : 'abc',
//     city : 'Delhi',
//     zipcode : 11556 
// };

let address = createAdress('a','b','c');
console.log(address);
/********************Factory Function********/

function createAdress(street,city,zipcode){
    return{
        //street :street,
        street,
        city,
        zipcode,
    };
}