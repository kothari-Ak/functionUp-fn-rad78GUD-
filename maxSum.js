
let arr=[7,3,0,1,5,8]
let  max=0
let sum=0, smax=0

for(let i=0;i<=arr.length;i++){
    if(arr[i]>max){
smax=max
max=arr[i]
    }
    else if (arr[i]<max)
        smax=arr[i]    
}
sum=max+smax
console.log(sum);