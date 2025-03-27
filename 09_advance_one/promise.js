// const promiseOne=new Promise(function(resolve,reject){
//     //do an async task
//     //DB calls,cryptograpghy,network

//     setTimeout(function(){
//         console.log('Async task is complete');
//         resolve(); 
//     },1000)
// }); 

// promiseOne.then(function(){
//     console.log("promise consumed");
// })

// //no need to store in variable
// new Promise(function(resolve,reject){

//     setTimeout(function(){
//         console.log('Async2 task is complete');
//         resolve(); 
//     },1000)
// }) .then(function(){
//     console.log("promise2 resolved");
// })


// const promiseThree=new Promise(function(resolve,reject){
//     setTimeout(function(){
//         resolve({username:"chai",email:"dipchandkalwar@gmail.com"})
//     },1000)

// })

// promiseThree.then(function(user){
//     console.log(user);
// })


const promiseFour=new Promise(function(resolve,reject){
    setTimeout(function(){
        // let error=false
        let error=true
        if(!error){
            resolve({username:"dip",password:"123"})
        }
        else{
            reject('ERROR: something went wrong')
        }
    },1000)

})

promiseFour.then((user)=>{
console.log(user);
return user.username
}).then((username)=>{
console.log(username)
}).catch(function(error){
    console.log(error);
}).finally(()=>{
    console.log("the promise is either resolved or rejected");
})