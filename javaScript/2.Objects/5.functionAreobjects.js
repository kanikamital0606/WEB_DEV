function Circle (radius){
    this.radius = radius;
    this.draw = function(){
        console.log('Draw');
    }
}
/*
const Circle1 = new Function('radius', `
this.radius = radius;
this.draw = function(){
    console.log('Draw');
}
`);

const circle = new Circle1(1);
const another = new Circle(1);
*/
Circle.call({},1);
Circle.apply({}, [1,2,3]);

const another = new Circle(1);