
function missNum(array,N){
    let sum=0
for(let i=0;i<N-1;i++){
sum+=array[i]
}
let esum=N*(N+1)/2
let ans=esum-sum
return ans
}
console.log(missNum([5,3,4,1,2],6))
