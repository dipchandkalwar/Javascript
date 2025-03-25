 function one(){
    const username="Dip"

    function two(){
       const website="youtube"
       console.log(username); 
    }
   //console.log(website);
    //two()
 }
 //one()

 if(true){
    const username="dip"
    if(username==="dip"){
        const website=" youtube";
        //console.log(username+website);
    }
    //console.log(website);

 }
 //console.log(username);



 //+++++++++++ interesting ++++++++++++++++

 //addone()//we can call function here before writing finction
 function addone(num){
    return num+1;
 }
 //addone()//we can call function here also as normal

 const addTwo=function(num){
    return num+2;

 }
 addTwo()//we can call here but can not call before the function declration 