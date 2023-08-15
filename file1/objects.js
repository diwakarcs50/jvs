//two types of objects 
//singleton 
//Object.create(())

//onject literals
const asym=Symbol("india")
const juser={
    name:"diwakar",
    email:"diwakar@google.com",
    asym:"country",
    ["sym"]:"unique"
}
// console.log(juser);
// console.log(juser.name)
// console.log(juser["name"])
// console.log(juser.asym);
// juser.name="anyname"
// // Object.freeze(juser)
// juser.name="givename"//it will not work
// console.log(juser)
// console.log(juser.sym);

juser.fun=function(){
    // console.log("he is a jsuser")
}
juser.fun2=function(){
    console.log(`this object name is ${this.name}`)
}
juser.fun3=function(){
    console.log(`this object email is ${this.email}`);
}
console.log(juser.fun3())



