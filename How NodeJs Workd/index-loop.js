const fs = require('fs');


setTimeout(()=>{
    console.log("timer 1 finished");
})

setImmediate(()=>{
    console.log("immediate 1finished");
})


fs.readFile('./test-file.txt', ()=>{
    console.log("I/O finished");
    setTimeout(()=>console.log("timer 1 finished"),0);
    
    setImmediate(()=>console.log("immediate 1finished"), 3000 );
})


console.log("hello from top level code");