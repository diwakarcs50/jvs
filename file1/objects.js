//two types of objects 
//singleton 
//Object.create(())

//onject literals
// const asym=Symbol("india")
// const juser={
//     name:"diwakar",
//     email:"diwakar@google.com",
//     asym:"country",
//     ["sym"]:"unique"
// }
// console.log(juser);
// console.log(juser.name)
// console.log(juser["name"])
// console.log(juser.asym);
// juser.name="anyname"
// // Object.freeze(juser)
// juser.name="givename"//it will not work
// console.log(juser)
// console.log(juser.sym);

// juser.fun=function(){
//     // console.log("he is a jsuser")
// }
// juser.fun2=function(){
//     console.log(`this object name is ${this.name}`)
// }
// juser.fun3=function(){
//     console.log(`this object email is ${this.email}`);
// }
// console.log(juser.fun3())


//object version 2
const obj=new Object()
console.log(obj)
obj.user="diwakar"
obj.name="anyname"
console.log(obj)

const obj1={1:'a',2:'b'}
const obj2={3:'c',4:'d'}
// const obj3={obj1,obj2}
// const obj3={...obj1,...obj2}
const obj3=Object.assign({},obj1,obj2)//we take it as Object.assign(target,source)
console.log(obj3)
console.log(Object.keys(obj3))
console.log(Object.values(obj3))
//we can have nested objects

console.log(Object.entries(obj3))//It will change every object in arrays
//we can always use chrome console




