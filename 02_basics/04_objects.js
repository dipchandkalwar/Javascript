//singleton object
// const tinderUser=new Object()


//non singleton
const tinderUser={}

tinderUser.id="123abc"
tinderUser.name="Sammy"
tinderUser.isLoggedIn=false

//console.log(tinderUser)

const regularUser={
    email:"some@gmail.com",
    fullname:{
        userfullname:{
            firstname:"hitesh",
            lastname:"choydhary"
        }
    }
}

//console.log(regularUser.fullname.userfullname.lastname)

const obj1={
    1:"a",
    2:"b"
}
const obj2={
    3:"a",
    4:"b"
}

//const obj3=Object.assign({},obj1,obj2);

//spred opertor
const obj3={...obj1, ...obj2}

// console.log(obj3);


// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser))
// console.log(Object.entries(tinderUser))

console.log(tinderUser.hasOwnProperty("isLogged"));


const course={
    name:"js in hindi",
    price:"999",
    instructor:"Hitesh"

}

//for extraction old method
//course.instructor

const{name : n1}=course
console.log(n1);


//json format

// {
// "Name":"dip",
// "coursename":"js in hindi"
// }