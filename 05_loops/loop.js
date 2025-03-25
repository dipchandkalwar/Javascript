const arr=[1,2,3,4,5]
//for of loop

for (const num  of arr) {
   // console.log(num);
}

const greeting="hello world";
for(const greet of greeting){
   // console.log(`Each character is ${greet}`);
}

//Maps

const map=new Map()
map.set('IN',"India");
map.set('USA',"united states of america");
map.set('Fr',"France");
map.set('IN',"India");

//onsole.log(map);

// for(const key of map){
//     console.log(key);
// }

for(const [key, value] of map){
    //console.log(key,':-',value);
}

const myObject={
    'game1':"NFS",
    "game2":"spiderman"
}
//object can not be iterable through this method
for(const[key,value] of myObject){
    console.log(key,':-',value);
}