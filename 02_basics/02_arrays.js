 const marvel_heros=["thor","Ironman","spiderman"]

 const dc_heros=["superman","flash","batman"]

 //conactionation of array

//  const allheros=marvel_heros.concat(dc_heros);
//  console.log(allheros);


//spread opertor (sisa ko glass phutnu spred hunu)(...) same work as concat

const all_new_heros=[...marvel_heros, ...dc_heros]

//console.log(all_new_heros);

// if array bhitra array haru xa bhane and we need in single array the we use method flat

const another_array=[1,2,3,[4,5,6],7,8,[4,5],[6,7]]

const real_another_array=another_array.flat(Infinity);

// console.log(real_another_array);


// console.log(Array.isArray("dipchand"))
// //convert into array using from
// console.log(Array.from("Dipchand"));

// console.log(Array.from({name:
//     "Dipchand"
// }));//gives empty array as it confuse what to do

//if we have more varaible and want to convert into array then use of

let score1=100
let score2=200
let score3=300

console.log(Array.of(score1,score2,score3));




