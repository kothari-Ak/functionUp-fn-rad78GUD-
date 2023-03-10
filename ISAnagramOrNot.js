// const IsAnagramOrNot = (str1,str2)=>{
//     const map = new Map();
//     if(str1.length!==str2.length)return false;
//     for(let value of str1){
//         map.set(value, map.get(value)+1||1);
//     }
// console.log(map)
//     for(let i =0;i<str2.length;i++){
//         if(!map.get(str2[i])) return false;
//         console.log(map.get(str2[i]))
//         map.set(str2[i],map.get(str2[i])-1);

//     }
//     console.log(map)
//     return true;
//  }


function chckSqreInOthrAray(array1, array2) {
    let obj1 = {};
    for (let keyValue of array1) {
      obj1[keyValue] = (obj1[keyValue] || 0) + 1;
    }
  console.log(obj1)
    let obj2 = {};
    for (let keyValue of array2) {
      obj2[keyValue] = (obj2[keyValue] || 0) + 1;
    }
console.log(obj2);
    if (Object.keys(obj1).length !== Object.keys(obj2).length) return false;
for(let key in obj1){
    console.log(obj1[key]);
    if(obj1[key]!=obj2[key]) return false
    
}
return true
}
console.log(chckSqreInOthrAray("loleh","hello"))

//  console.log(IsAnagramOrNot('hllol','hello'))

 //linear time complexity
