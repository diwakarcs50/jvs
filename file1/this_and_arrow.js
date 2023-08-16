// const obj1={
//     username:"diwakar",
//     userid:24,
//     fun: function (){
//         console.log(this)
//     }
   
    
// }

// console.log(obj1.fun())
// obj1.username="sam"
// console.log(obj1.fun())

//we cannot use a this inside function
// const fun1=function(){
//     const username="diwakar"
//     console.log(this.username)
// }
// console.log(fun1())

// console.log(this)

//arrow function

// const arr=(num1,num2)=>( num1 + num2) //implicit declaration where we need not mention return type
// const arr=(num1,num2)=>{return num1 + num2}//we explicitly mention return type
// console.log(arr(3,4))

const arr=()=>{
    console.log(this)
}
console.log(arr())

const arr1=function(){
    console.log(this)
}
console.log(arr1())
