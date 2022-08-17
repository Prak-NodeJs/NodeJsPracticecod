// // every and some method 

// // every :=> returns true only if every statement is true otherwise false;

// // some <= return true if some of the statemnet is true; 


// // var computers = [
// //     {name : 'apple', ram : 8},
// //     {name : 'dell', ram : 9},
// //     {name : 'ho', ram : 10},
// // ]

// // // every method example
// // var hello = computers.every(function (computer){
// //     return computer.ram>8;
// // })

// // console.log(hello);

// // // some method example

// // var hellp = computers.some(function (computer){
// //     return computer.ram>8;
// // })

// // console.log(hellp);


// var names = [
//     "hello", "ralkas","kiran"
// ]

// var hello = names.some(function (name){
//      return name.length>2;
// })

// console.log(hello);




// Given an array of network objects representing network requests, assign the boolean 'true' to the variable 
// 'inProgress' if any network request has a 'status' of 'pending'.


// var requests = [
//     { url: '/photos', status: 'complete' },
//     { url: '/albums', status: 'pending' },
//     { url: '/users', status: 'failed' }
//   ];
  
//   var inProgress = requests.some(function (request){
//       return request.status==='pending';
//   })




//   Given an array of users, return 'true' if every user has 
//   submitted a request form.  Assign the result to the variable 'hasSumbmitted'.

//   var users = [
//     { id: 21, hasSubmitted: true },
//     { id: 62, hasSubmitted: false },
//     { id: 4, hasSubmitted: true }
//   ];
  
//   var hasSubmitted = users.every(function (user){
//         return user.hasSubmitted == true;
//   });
