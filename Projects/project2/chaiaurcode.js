const form=document.querySelector('form');
//eata hami height weight ko value linxau ta empty value lihalxa

form.addEventListener('submit',function(e){
  e.preventDefault();//do not submit

const height=parseInt(document.querySelector('#height').value);
const weight=parseInt(document.querySelector('#weight').value);
const results=document.querySelector('#results');

if(height==="" || height<0 || isNaN(height)){
  results.innerHTML="please give a valid height";
} 

else if(weight==="" || weight<0 || isNaN(weight)){
  results.innerHTML="please give a valid weight";
}
else{
  const bmi=(weight/((height*height)/10000)).toFixed(2);
  //show the result
  //results.innerHTML=`<span>${bmi}</span>`
  let category="";
  if(bmi<18.6){
    category="underweight";
  }
  else if(bmi>=18.6 && bmi<=24.9){
category="normal weight"
  }
  else if(bmi>=25 && bmi<=29.9){
    category="overweight";
  }
  else{
    category="Obese";
  }
  //display result
  results.innerHTML=`<span>${bmi}-${category}</span>`
  

 
}

})