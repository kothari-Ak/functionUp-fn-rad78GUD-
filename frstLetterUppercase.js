
const frstLetterUpprCase = (arr)=>{
    let result=[]
    if(arr.length==0) return []
w=arr[0][0].toUpperCase()+arr[0].slice(1)
result.push(w)
return result.concat(frstLetterUpprCase(arr.slice(1)))
}

console.log(frstLetterUpprCase(["hare","krishna"]));