//for

for(let index=0;index<10;index++){
    const element=index;
   // console.log(element);
}

for(let i=1;i<=10;i++){
   // console.log(`Outer loop value :${i}`);
    for(let j=1;j<=10;j++){
       //   console.log(`${i} * ${j} = ${i*j}`);
    }
}

//while loop

 let index=0;
while (index<=10){
    //console.log(`Value of index is${index}`);
    index=index+2;
}

//do while loop
let score=1;
do{
    console.log(`Score is ${score}`);
    score++
}while(score<=10);