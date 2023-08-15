//arrays can be declared in two ways
const mixarr=[1,2,3,4,"ytsk",'u']
console.log(mixarr)
const myarr=[1,2,3,4,5]
console.log(myarr)
const newarr=myarr.join() //converts arrays to strings
console.log(newarr)

myarr.push(6);
console.log(myarr)

myarr.pop()
console.log(myarr)

const myarr1=new Array(1,2,3,4,53)
console.log(myarr1)

myarr1.unshift(45)//adds the elment at the front
console.log(myarr1)
myarr1.unshift("dk")
console.log(myarr1)

console.log(myarr1.shift())//note:when we are printing it is giving the first element
console.log(myarr1)

//slice and splice are important

console.log("A ",myarr)
console.log(myarr.slice(1,3))
console.log(myarr)//myarr is not changed 

console.log(myarr.splice(1,3))
console.log("B ",myarr)//myarr is changed

