// new Promise(function(resolve,reject){
// //async function 
// //like database calling
//     setTimeout(function(){
//         console.log("promise created")
//         resolve()
//     },1000)
// }).then(function(){
//     console.log("promise consumed")
// })

// const promiseTwo=new Promise(function(resolve,reject){
//     //async function
//    setTimeout(function(){
//    console.log("promise two started");
//    resolve({"username":"diwakar"})
//     },2000)
// })

// promiseTwo.then(function(data){
//     console.log("promise two consumed")
//     console.log(data)
// })


// const promiseThree=new Promise(function(resolve,reject){
//     setTimeout(function(){
//         console.log("promise three is created");
//         let error=true
//         let erd=9867
//         if(!error){
//             resolve({username:"diwakar",pass:"123"})
//         }
//         else{
//             reject(erd)
//         }
//     },1000)
// })
// //HERE WE CAN PERFORM CHAINING 
// //IF ERROR DOESNT COME .then() IS EXECUTED
// //ELSE .catch() IS EXECUTED
// //finally() executes in both scenarios
// promiseThree.then(function(user){
//     console.log(user)
//     return user.username
// }).then(function(username){
//     console.log(username)
// }).catch(function(erd){
//     console.log(`ERROR IS ENCOUNTERED at pin ${erd} `)
// }).finally(function(){
//     console.log("THE RESULT IS GIVEN AND WINTER IS COMING")
// })


//async and await

// const promisFive=new Promise(function(resolve,reject){
//     setTimeout(function(){
//         console.log("promise five working")
//     let error=true
//     if(!error){
//         resolve({username:"hello",pass:"123"})
//     }
//     else{
//         reject("ERROR : ENCOUNTER IN HANDLING")
//     }

//     },1000)
// })

// const nam=async function consumeFive(){

    
//      try{
//         const response=await promisFive
//         console.log(response.username)
//      }
//       catch(error){
//         console.log(error)
//       }

// }
// nam()
//THE RESPONSE OF FETCH IS PROMISE
async function getallusers(){
    try {
        const response=await fetch('https://randomuser.me/api/')
        const data=await response.json()
         console.log(data)
    } catch (error) {
        console.log(error)
    }
   

}
// getallusers()


//NOW IF WE WANT TO USE .then()

fetch('https://randomuser.me/api/').
then(function(response){
  console.log("THEN DATA IS CALLED")
  return response.json()
})
.then(function(data){
console.log(data)
})
.catch(function(error){
console.log(error)
})
