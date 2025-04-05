const user={
    username:"dip",
    loginCount:8,
    SignedIn:true,
    getUserDetails:function(){
      //  console.log("Got user details from database");

    //   console.log(`Username:${this.username}`);

   // console.log(this);
    }
}
// console.log(user.username);
// console.log(user.getUserDetails());
// console.log(this);

// const promiseOne=new Promise()
// //new is a constructor function create a new instance
// const date=new Date()

function User(username,loginCount,isLoggedIn){
    this. username=username;
    this.loginCount=loginCount;
    this.isLoggedIn=isLoggedIn;

    return this;
}

const UserOne= new User("dip",12,true);
const UserTwo=new User("ak",11,false);
console.log(UserOne);