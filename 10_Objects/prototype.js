// let myName="hitesh     "
// console.log(myName.truelength)


let myHeros=["thor","spiderman"];

let heroPower={
    thor:"hammer",
    spiderman:"sling",

    getSpiderPower:function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
}

Object.prototype.hitesh=function(){
    console.log('hitesh is present in all object');
}

//heroPower.hitesh();
//myHeros.hitesh();

// inhritance

const User={
    name:"dip",
    email:"abc@gmail.com"
}

const Teacher={
    makeVideo:false
}

const TeachingSupport={
    isAvailable:false
}

const TASupport={
    makeassignment:'js assignment',
    fullTime:true,
//     __proto__:TeachingSupport
 }
//old tech
// Teacher.__proto__=User

//modern synatx

Object.setPrototypeOf(TeachingSupport,Teacher)

let anotherUsername="chaiAurcode   "
String.prototype.trueLength=function(){
    console.log(`${this}`);
    console.log(`{this.name}`);
    console.log(`True length is:${this.trim().length}`);
}

anotherUsername.trueLength();