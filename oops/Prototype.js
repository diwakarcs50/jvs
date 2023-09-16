// const array=[1,2,3] it is also a object

const myrate=function (score ,rate){
    this.rate=rate
    this.score=score
}


// myrate.prototype.printme=function(){
//     console.log(`the price of tea is ${this.score}`)
// }
// const tea= new myrate(10,20);
// console.log(tea.score)
// console.log(tea.printme())


//this is creating a prototype in String
let names="diwakar";
String.prototype.prints=function(){
console.log(this)    
console.log(`my name `)
}


// names.prints()
// "".prints()


//Now lets create a Object prototype //father of all 


Object.prototype.callme=function(){
   console.log("call me anywhere and i will be avaialable")
}
const num=1;
"me".callme()
num.callme()
myrate.callme()
