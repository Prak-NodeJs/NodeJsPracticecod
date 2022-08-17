// var expenses = {
//     type : "hello",
//     amount :700
// }


//using destruting property we can reduce code 

//example


//var type = expenses.type;
//var amount = expenses.amount;


//using destructing we can write it as


// const {type, amount} = expenses;  // creating two varibales type and amount and passing refrence to expensses as  expeses.type, expenses.amount
// console.log(type);
// console.log(amount);

// const company =[
//     'apple',
//     'microsoft',
//     'infosys'
// ]

// const [name1, name2, name3] =company;

// console.log(`${name1}, ${name2} ${name3}`);


// const points = [
//     [4,5],
//     [10,1],
//     [0,40]
// ];

// const bd = points.map(([x,y])=>{
//     return {x,y};
// });

// console.log(bd);


var name = 'hello';
var clor = 'yeel';
var age =22;

var dog ={ name, clor, age};
console.log(dog);