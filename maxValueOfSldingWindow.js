
let arr=[1,3,-1,-3,5,3,6,7], windSize=3
    let n=8,result=[]               //total num of windows= n - windSize + 1
for(let currWindow=0;currWindow<n-windSize+1;currWindow++){
 let max=arr[currWindow]
for(let i=currWindow;i<currWindow;i++){
    if(max<arr[i]) 
    {max=arr[i]}
}result.push(max)
}console.log(result) 

