
const products=[
    {id:1,
        category:"Electron",
        type:"Mobile",
        price:10000
    },
    {id:1,
        category:"Electron",
        type:"refrgerator",
        price:30000
    },
        {id:1,
        category:"Electron",
        type:"Mobile",
        price:20000

}]

// double the price having product type ="mobile"
products.map((arr)=>{
    if(products.type=="Mobile")
return arr.price*2
})
console.log(products);

//find the total of the price of all the mobiles

const calculateTotal=(arr)=>{
const filteredMobiles=arr.filter((item)=>{
if(item.type=="Mobile")
return item
})
const totalPrice=filteredMobiles.reduce((acc,curr)=>{
return acc.price+curr.price
})
return totalPrice
}
console.log(calculateTotal(products));
