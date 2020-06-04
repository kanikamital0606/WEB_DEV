const now = new Date();
const date1 = new Date('June 2020 05:08');
const date2 = new Date(2018,4,11,9,);

now.setFullYear(2020);
console.log(now.toDateString());
console.log(now.toTimeString());
console.log(now.toISOString());
//JavaSript Date