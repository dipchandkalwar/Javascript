
//Function

function f1(){
    console.log("D");
    console.log("I");
    console.log("p");
}

// f1();

// function addTwoNumbers(n1,n2){
//     console.log(n1+n2);
// }


function addTwoNumbers(n1,n2){
        let result=n1+n2;
        return result;
 }
    
const result=addTwoNumbers(2,3);
// console.log(result);

function loginUseMessage(username){
    if(username===undefined){
        console.log("please enter user name");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUseMessage("dip"));

const myNewArray=[200,300,400]

function returnSecondValue(getArray){

    return getArray[1];
}

console.log(returnSecondValue(myNewArray));