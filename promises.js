const pr= new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve(" hey this will be executed if it is resolved")
    },3000);
})
pr.then((res)=>{
    console.log(res);
})
.catch((error)=>{
    console.log(error);
})
.finally(()=>{
    console.log(" it will be executed whatever the promise might be ")
});
