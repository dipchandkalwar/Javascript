//Imediately Invoked function Expression(IIFE)

(function chai(){
    //named IIFE
    console.log(`DB connected`);
})();

( (name) =>{
console.log(`DB2 connected ${name}`)
})("dipchand");