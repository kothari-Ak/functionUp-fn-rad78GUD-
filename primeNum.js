
 let arr=[7,8,2,1,0,56,44,43]

 
// let array=[]
// for(let j=2;j<12;j++){
 
//     if(12%j==0){
//         console.log("false")
//         break;
//     }
//     console.log("true")
//     break;
// }

const isPrime=(number)=>{
    if(number==1) return false
    for(let i=2;i*i<=number;i++){
        if(number%i==0) return false
    }
   return true
}

arr.forEach((elemnt)=>{
if(isPrime(elemnt)) console.log(elemnt)
})

for(let ele of arr){
    if(isPrime(ele))  console.log(ele)
}



function sieveOfEratosthenes(num){
    let prime =Array.from({length:num+1},()=>true)
    console.log(prime)
    for(p=2;p*p<=num;p++){
        if(prime[p]==true){
            for(i=p*p;i<=num;i+=p)
            prime[i]=false
        }
    }
for(i=2;i<=num;i++){
    if(prime[i]==true) console.log(i)
}}

sieveOfEratosthenes(10)