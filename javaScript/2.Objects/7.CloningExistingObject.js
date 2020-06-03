const circle = {
    radius : 1,
    draw() {
        console.log('draw');
    }
};

/*
const another = {}; //1 

//for in loop to 
//iterate over this above loop
//and copy to this new object here => another ={} 

for (let let key in circle) { //2
    another[key] = circle[key]; //3
*/

//code equivalent to 
//another['radius'] = circle['radius'];

//const another = Object.assign({}, circle); //same to 123

const another = {...circle };
console.log(another);
