const myNums=[1,2,3]
const acc=0;

const myTotal=myNums.reduce((acc,currval)=>{
   // console.log(`acc:${acc} and currval:${currval}`);
return acc+currval;
},acc);

//console.log(myTotal);

const shoppingcart=[
    {
        itemName:"js course",
        price:2999
    },

    {
        itemName:"DSA course",
        price:2300
    },


    {
        itemName:" cpp course",
        price:299
    }
]

const priceToPay=shoppingcart.reduce((acc,item)=>{
return acc+item.price
},0);

console.log(priceToPay);