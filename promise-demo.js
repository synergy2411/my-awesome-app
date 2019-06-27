const promise = new Promise((resolve, reject) => {
    setTimeout(()=>{
        // resolve("Here the data comes!")
        reject(new Error ("Something bad happened!"))
    }, 2000);
})

promise.then(resp => {
    console.log(resp);
}).catch(err => {
    console.log(err);
})