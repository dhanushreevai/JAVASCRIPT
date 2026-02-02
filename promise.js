let newPromise = new Promise((resolve, reject) => {
    let datarecived = false 
    if(datarecived){
        resolve("Data Received")
    }
    else{
        reject("No data")
    }
    
})

newPromise.then((msg) => {
    console.log("Success" + msg)
})
.catch((msg)=>{
    console.log("Failed" + msg)
}) 