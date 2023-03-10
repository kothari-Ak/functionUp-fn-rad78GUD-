
function maxRepeatNum(arr){
    let map=new Map()
    for (let keyValue of arr){
map.set(keyValue,map.get(keyValue)+1||1)
    }
    console.log(map.entries());
    let maxFreq=0,maxFreqKey=0
   map.forEach((value,key)=>{
    if(value>maxFreq){
        maxFreq=value
        maxFreqKey=key
    }
   })
   return maxFreqKey
} 
    console.log(maxRepeatNum([8,8,9,7,9,9,5,9,1,1,1,9,9].sort()))

