// function addNumber (number){
//     return numbers.reduce((sum, number)=>{
//              return sum+number;
//     },0)
    
// }


// const numbers =[1,2,3,4];
// console.log(addNumber(numbers));


// using rest operator we can re write thi <code>
 //...numbers (this is the way of using rest operator, this means create new array name as numbers with some elements)
// </code>

// function addNumber (...numbers){
//     return numbers.reduce((sum, number)=>{
//              return sum+number;
//     },0)
    
// }



// console.log(addNumber(1,2,34));


//Spread operator


const defaultColor = ['red', 'greem'];
const userFavcolor = ['orange', 'yellow'];


defaultColor.concet(userFavcolor);

// using spread method to join the array or value


[...defaultColor, ...userFavcolor];

 //to add new element

 ['green', ...defaultColor, ...userFavcolor];

