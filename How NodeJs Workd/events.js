const EventEmitter = require('events');
  const event  = new EventEmitter();


  event.on('sayMyName', ()=>{
    console.log("Hello this is Praksh");
  })

  event.on('sayMyName', ()=>{
    console.log("aaryan chutiya ");
  })

  
   event.emit('sayMyName')