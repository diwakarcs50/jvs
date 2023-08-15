// two types of data types mainly
/*
1.primitive => this kind of data type passes value
2.non-primitive =>this kind of data types passes reference

7 types of primitive types 
Number String null undefined biginteger boolean Symbol
3 types of non primitive types
Arrays Objects Functions
*/
let num="5"
let numb=5
let bignum=294n
let num1=Symbol('123')
let num2=Symbol('123')
// console.log(num1===num2)
// console.log (typeof bignumber)

let array=[2,3,4,5,5]
console.log(typeof array)
let object={
    name:"asaj",
    age:"23"
    
}
console.log(typeof object)

function fname(){
    console.log("my name")
}
console.log(typeof fname)
console.log(typeof bignum)

//anything starting with string changes all value to string
console.log("20"+89+3)


//similarly vice-versa
console.log(2+3+"5")

//PERFORM CONVERSIONS