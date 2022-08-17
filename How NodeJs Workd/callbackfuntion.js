
const a = (canc)=>{
    setTimeout(()=>{
        console.log("funa A executed");
    })
    canc();
}

const b = ()=>{
    setTimeout(()=>{
        console.log("fun B executed");
    })
}

a(b);

