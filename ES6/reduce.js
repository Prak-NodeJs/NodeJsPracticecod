var numbers = [1,2,3,4,5]

// var sum =0;
//  for(var i=0; i<numbers.length; i++){
//      sum+= numbers[i];
//  }

//  console.log(sum)


//  Reudce Method 


// var he = numbers.reduce(function (sum, number){
//     return sum+=number;

// }, 0);

// console.log(he);


// Use the 'reduce' helper to create an object that tallies the number of sitting and standing desks.  The object returned should have the form '{ sitting: 3, standing: 2 }'.  The initial value has been provided to you.
// Hint: Don't forget to return the accumulator object (the first argument to the iterator function)

// var desks = [
//     { type: 'sitting' },
//     { type: 'standing' },
//     { type: 'sitting' },
//     { type: 'sitting' },
//     { type: 'standing' }
//   ];
  
//   var deskTypes = desks.reduce(function(sum, value) {
//       if(value.type==='sitting'){
//           sum.sitting++;
//       }else if(value.type==='standing'){
//           sum.standing++;
//       }
//       return sum;
      
//   }, { sitting: 0, standing: 0 });