//generate a random color

const randomColor=function(){
    const hex="012346789ABCDEF";
    let color='#';
    for(let i=0;i<6;i++){
        color+=hex[Math.floor(Math.random()*16)]
    }
    return color;
}
//for backgroundcolor
function changecolor(){
    document.body.style.backgroundColor=randomColor();
}

let intervalId=null; 

const startchanginColor=function(){
    if(!intervalId){
        intervalId=setInterval(changecolor,1000);

    }
   

}

const stopchanginColor=function(){
clearInterval(intervalId);
intervalId=null;
}


document.querySelector("#start").addEventListener('click',startchanginColor);

document.querySelector("#stop").addEventListener('click',stopchanginColor);