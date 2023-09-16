class user{
    constructor(username,userid){
        this.username=username
        this.userid=userid

    }

    encrypt(){
        console.log(`the password is ${this.userid}abc`)
    }

}
const tea=new user("diwakar","247")
// tea.encrypt()


//inheritance
class teacher extends user{
    constructor(usernam,subject,job){
        super(usernam,"267")
        this.job=job;
       this.subject=subject

    }
    teach(){
        console.log(`teaching is done by ${this.userid}`)
    }
}
const  deepak=new teacher("deepak","kotlin","tati")
deepak.teach()