//Object-oriented Programming (OOP)

const circle = {
    radius: 1,
    //object inside location
    location: {
        x:1,
        y:1
    },
    isVisible: true,
    draw: function() {
        console.log('draw');
    }
};

circle.draw(); //method