//const clock=document.querySelector("#clock");
const clock=document.getElementById('clock');
//1000=1sec
setInterval(function(){

  let date=new Date();
  clock.innerHTML=date.toLocaleTimeString();
},1000)