 const userLoggedIn=true;
 const debitcard=true;

 if(userLoggedIn && debitcard){
    console.log("allow to buy a course");
 }

 //falsy value

 //false, 0,-0,BigInt 0n,"",null,undefined,NaN

 //Truthy value

 // "0",'false'," ",[],{},function(){}

 //empty object
 const emptyObj={}

 if(Object.keys(emptyObj).length===0){
    console.log("object is empty");
 }


 //Nullish coalescing opertor(??):null undefined

 let val1;
 //val1=5??10
 val1=null??10
console.log(val1);

//Terinary operator

//consition ? true:false

const iceTeaPrice=100;
iceTeaPrice>=80 ?console.log("less than 80"):console.log("more than 80");