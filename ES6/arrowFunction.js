//arrowfunction in java script, 
//we dont use function keyword in the arraouwfunction, we put => sign after arguments



// const add = (a,b)=>{
//    return a+b;
// }

//  const add1= (a,b) => (a+b);

// console.log(add1(1,2));

const double1 = (number) => (2*number);
const double2 = number => 2*number;

const double3 = (number)=>{
  return number*2;
}

console.log(double3(8));
console.log(double1(3));
console.log(double2(3));
