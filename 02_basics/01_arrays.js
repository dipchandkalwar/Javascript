 //array
 const myArr=[0,1,2,3,4]
 const myarrr2=new Array(1,2,3,4);
//  console.log(myarrr2[2]);


 //Array methods

//  myArr.push(6)
//  myArr.pop()//popthe last element

//  myArr.unshift(9)// add the elemnt is the firsy
//  myArr.shift()//reomve firstb elemt like push pop


// console.log(myArr.includes(9));
// console.log(myArr.indexOf(6));

// const newArr=myArr.join()//change the array into string
//  console.log(myArr);
//  console.log(newArr);



//slice,splice

//slice doenot change the original array
console.log("A",myArr);
const myn1=myArr.slice(1,3);
console.log(myn1);
console.log("B",myArr);

//splice changes the original array as it removes the kindex value where we used splice like(1,3) it means it removes values of index from 1 to 3

const myn2=myArr.splice(1,3);
console.log("C",myArr);
console.log(myn2);