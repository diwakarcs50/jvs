//basics of functions in javascript
// function logUser(username){
//     console.log(`${username} logged in`)
// }

// function logUser(username="default"){//default signifies when we do not pass any value it chooses default
//     if(!username){
//         console.log("enter a valid username")
//          return
//     }
//     // if(username==undefined){
//     //     console.log("enter a valid username")
//     //     return
//     // }
//     console.log(`${username} logged in`)
// }
// logUser()

// function calculatecart(...num1){//here we dont need to define how many parameters are going to come
//     console.log(num1)
// }
// console.log(calculatecart(10,20,30,40));

//passing of objects 
//similarly we can pass arrays
const obj1={
    name:"username",
    id:"userid"
}

const {name:n,id:i}=obj1
function user(arrive){
    console.log(`${n} is the user with is ${i}`)

}
user(obj1)


//scopes
if(true){
    let a= 10
    const b=20
    var c=30//it gives the value even outside the scope which is not a good practice
}
// console.log(a);
// console.log(b);
console.log(c);