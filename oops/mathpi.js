//Can Pi Value of js be changed in js

console.log(Math.PI)
// const des=Object.getOwnPropertyDescriptor(Math,"PI")
// console.log(des)


// Object.defineProperty(Math,'PI',{
//     writable: true
// })

const myobj={
    name:"diwakar",
    job:"se"
}

const des2=Object.getOwnPropertyDescriptor(myobj,'name')

Object.defineProperty(myobj,'name',{
    writable:true
})
// console.log(des2)
const des3=Object.getOwnPropertyDescriptor(myobj,'name')
// console.log(des3);

myobj.name="patna"
// console.log(myobj)


//object is not iterable but we can make it by using Object.entries
for (let [key,value] of Object.entries(myobj)) {
  console.log(`${key} : ${value}`)
}