
function finLargstSumOfK(array, k){
    if(k>array.length) return "k shouldn't greater than array";
    else{
    let max=0;
    for(let i=0;i<array.length-k+1;i++){
        let temp=0
    for(let j=0;j<k;j++){
temp=temp+array[i+j]
    }
    if(temp>max) max=temp
    }
    return max
}
}
console.log(finLargstSumOfK([7,8,9,0,5,8,4,15],3));