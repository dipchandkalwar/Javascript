//singleton(using constructor )
//object.create

// object literals

//data type symbol
const mysm=Symbol("key1")

const jsUser={
    name:"Dipchand",
    "full name":"Dipchand kalwar",
    age:23,
   [mysm]:"mykey1",
    location:"india",
    email:"dip@gmail.com",
    isLoggedIn:false,
    lastLoginDays:["Monday","saturday"]
}

// 1st method to extract value from oblject
// console.log(jsUser.email);

//2nd method
// console.log(jsUser["email"])//it is helpful when we want to excdess full name it can not extreact through .

// console.log(jsUser["full name"]);
// console.log(jsUser[mysm])

// if we want to freeze object so no one can change it then use object.freeze();

jsUser.email="ak@gmail.com";
// Object.freeze(jsUser);
jsUser.email="abc@gmail.com"

// console.log(jsUser);

//function
jsUser.greeting=function(){
    console.log("hellow js user");
}

jsUser.greeting2=function(){
    console.log(`hello js user${this.name}`);
}

console.log(jsUser.greeting());
console.log(jsUser.greeting2());