const cirlce = {
    radius:1
};

//cannoot reassign const
//circle ={}

//adding property
cirlce.color = 'yellow';
cirlce.draw = function(){}

//delete property

delete cirlce.color;
delete cirlce.draw;

console.log(cirlce);