function setusername(username){
    console.log("is it called")
    this.username=username
}
function makeprofile(username,email,id){
  //ye bol rha hai aap mera this use karlo
    setusername.call(this,username)//call keyword hold karke rkhta hai function properties 
    // console.log("i am called")
    this.email=email
    this.id=id

  
}
const obj=new setusername("name")
console.log(obj)
const ob=new makeprofile("diwkar","@gmail.com",274)
console.log(ob)

