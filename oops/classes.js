//iterator
const object={
    name:"diwakar",
    pass:"7675",

    defines: function define(){
    //    console.log(this)
    }

}
// console.log(object.name)
// console.log(object.defines())
// console.log(this)


//this is a constrructor function
const User=function(username,password){
    this.username =username;
    this.password=password;
    this.greeting=function(){
        console.log(`the username is ${this.username}`)
    }
    // return this //optional
}
//read about instance of
const first=User("diwakar",24)
console.log(User.constructor)