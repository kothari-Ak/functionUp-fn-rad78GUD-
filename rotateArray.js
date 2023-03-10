
const reverse=function(arr,start,end){
    while(start<end){
        [arr[start],arr[end]]=[arr[end],arr[start]]
        start++
    end--
    }
    console.log(arr) 
}

setInterval(reverse,3000,[2,3,4,5,6,8],0,5)


// let arr=[1,2,3,4,5,6,7]
// let k=3

// arr=reverse(arr,0,arr.length-1)
// arr=reverse(arr,0,k-1)
// arr=reverse(arr,k,arr.length-1)

// console.log(arr);
