

// //#promises is an object that keep track whether the certain operation is completed, or get 
// //rejected;
// // it has three stage 
// // 1. Pending 
// // 2. resolve / fullfilled
// // 3.  Reject

const { rejects } = require("assert");
const { resolve } = require("path");



// // task 
// // Api student

// // 2s name and age
// // executor


// const promises = new Promise((resolve, Reject)=>{
//     setTimeout(() => {
//        let roll_no = [1, 2,3 ,4,5];
//        resolve(roll_no);
//     },2000);

// });

// const getBiodata = (indexdata) =>{
//     return new Promise((resolve, reject)=>{
//          setTimeout((indexdata) => {
//              let biodata = {
//                 name :'vinod',
//                 age : 26
//              }
//              resolve(`my roll no is ${indexdata}, my nam is ${biodata.name},
//              and im ${biodata.age}`);
//          }, 2000, indexdata);
//     });
// }
// // promise object has two 1st is Then and 2nd Catch

// promises.then((roll_no)=>{
//   console.log(roll_no);
//   getBiodata(roll_no[1]).then( (kuc)=>{
//    console.log(kuc);
//   }

//   )
// }).catch((error)=>{
//     console.log(error);
// })





const promise = new Promise((resolve, reject) =>{
    let name ={
        age:'praksh'
    }
    const a = name.age;
    reject("error while communicating");
})


promise.then((a)=>{
    console.log(a);
}).catch((error)=>{
       console.log(error);
})