
function countUniqueNumbers(array){
let map=new Map(), count=0
for(let elements of array){
map.set(elements, map.get(elements)+1||1)
}
for(let ele of map.values()){
if(ele==1) count++
}return count
}
console.log(countUniqueNumbers([7,9,7,5,0,0,3]));

// linear time complexity

let array=[8,0,6,7,7]
let map1=new Map()

for(let elements of array){
    map1.set(elements, (map1.get(elements)||0)+1)
    }
console.log(map1)

let map=new Map()
map.set("name","ShreeKrishna")
map.set("place","vrindavan")
map.set("age","infinite")

console.log(map)
