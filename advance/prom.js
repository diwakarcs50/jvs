const pro=new Promise(function(resolve,reject){
  setTimeout(() => {
    resolve()
    let error=0;
    reject(error)
    console.log("promise working")
   
  }, 2000);
})
pro
.then(()=>{
    console.log("hello")
})
.catch((error)=>{
  console.log("ERROR : OCCURED HERE")
})
.finally(()=>{
    console.log("this is always working")
})

async function allusers(){
    try{
        const response=await fetch('https://randomuser.me/api/')
        const data= await response.json()
        console.log(data);
    }
    catch(error){
           console.log(error)
    }
}
allusers()