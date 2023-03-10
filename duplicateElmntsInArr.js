

function finDuplictes(array){
    let map=new Map(), count=0
    for( elements of array){
    map.set(elements, map.get(elements)+1||1)
    }
    for(let ele of map.values()){
    if(ele>1) count++
    }return count
    }
    console.log(finDuplictes([7,9,7,5,0,0,3,3]));
    
    const finDuplictesWithConstantSpaceComplxty=(arr)=>{
let ans=0
for(let i=0;i<arr.length;i++){
    let x=Math.abs(arr[i])
    let index=x-1
if(arr[index]>0){
    ans=x
}
else arr[index]+arr[index]*-1
}
    return ans}
    console.log(finDuplictesWithConstantSpaceComplxty([7,9,9,9,9,7,9,7,5,5,9,7,5,5,]))

