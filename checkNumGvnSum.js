
let checkNumGvnSum=(arr,sum)=>{
    let obj={}
    let diff;
    for(let i=0;i<arr.length;i++){
        diff=sum-arr[i]
        if(obj[diff]) return true
    obj[arr[i]]=true
    }
    return false
}
console.log(checkNumGvnSum([6,4,3,2],11)
)
