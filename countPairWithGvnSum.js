
// function countPairWithGvnSum(k){
//     let array=[7,8,2,2,1,1,3,6]
//     let arr=new Set(array)
//     let ans=0
//     var map=new Map()
//     for(let ele of arr){
//         let y=k-ele
//         if(map.has(y)){
//             console.log(map.get(y));
//             ans+=map.get(y)
//         }
//         if(map.has(ele)){
//             map.set(ele,map.get(ele)+1)
//         }
//         else map.set(ele,1)
//     }
//     return ans
// }
function countPairWithGvnSum(sum,array){
    let start=0, end=array.length-1, str=""
    while(start<end){
        if(array[start]+array[end]==sum) console.log(str=array[start],array[end])  
        else if(array[start]+array[end]<sum) start++
        else end--
    }
}

console.log(countPairWithGvnSum(9,[2,3,4,6]));