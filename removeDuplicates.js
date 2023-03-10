
const removeDuplicates=(numbers)=>{
let set=new Set(numbers)
return [...set]
}
console.log(removeDuplicates([1,3,3,5,5,7,8]))
    