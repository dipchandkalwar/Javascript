const myObject={
    js:"javascript",
    cpp:"c++",
    rb:"ruby",
    swift:"swift by apple"
}

for (const key in myObject) {
   // console.log(key);
   //console.log(`${key} shortcut is for ${myObject[key]}`);
}

const prog=["js","rb","py"];
for(const key in prog){
    console.log(prog[key]);
}