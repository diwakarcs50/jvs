const name="diwakar"
const count=40
console.log(name)

const newString=`my name is ${name} and my count is {count}` //this is the best way to concatenate string
console.log(newString)

const anotherString=new String("abcdef")
console.log(anotherString)
console.log(__proto__)

console.log(anotherString.length)
console.log(anotherString[0])          

const sub=anotherString.substring(0,4)
console.log(sub)
const url="hhtps:diwakar%20kumar"
const u=url.replace('%20','-')
// console.log(url.replace('%20','-'))

console.log(url.includes("dk"))
console.log(url.includes("diwakar"))
console.log(u)

console.log(u.split("-"))
