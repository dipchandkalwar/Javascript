const buttons=document.querySelectorAll('.button');
const body=document.querySelector("body");

// //using if
// buttons.forEach( (button)=>{
// //console.log(button);
// button.addEventListener('click',function(e){
//   // console.log(e);
//   // console.log(e.target);

//   if(e.target.id==="grey"){
//    // body.style.backgroundColor="grey"
//     body.style.backgroundColor=e.target.id;
//   }
//   if(e.target.id==="white"){
//     // body.style.backgroundColor="white"
//      body.style.backgroundColor=e.target.id;
//    }

//    if(e.target.id==="blue"){
//     // body.style.backgroundColor="blue"
//      body.style.backgroundColor=e.target.id;
//    }

//    if(e.target.id==="yellow"){
//     // body.style.backgroundColor="yellow"
//      body.style.backgroundColor=e.target.id;
//    }
// })
// }); 

//using switch case
buttons.forEach((button)=>{
  button.addEventListener('click',(e)=>{
switch(e.target.id){
  //one type
  // case'grey':
  // body.style.backgroundColor=e.target.id;
  // break;
  // case 'yellow':
  //   body.style.backgroundColor=e.target.id;
  // break;

  //second type
  case 'grey':
  case 'yellow':
  case 'blue':
  case 'white':
  body.style.backgroundColor=e.target.id;
  break;

}
  })

})