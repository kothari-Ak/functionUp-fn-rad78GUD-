
function chckSqreInOthrAray(array1, array2) {
  let obj1 = {};
  for (let keyValue of array1) {
    obj1[keyValue] = (obj1[keyValue] || 0) + 1;
  }

  let obj2 = {};
  for (let keyValue of array2) {
    obj2[keyValue] = (obj2[keyValue] || 0) + 1;
  }

  if (Object.keys(obj1).length !== Object.keys(obj2).length) return false;
  for (let key in obj1) {
    console.log(key);
  
    if (obj1[key] !== obj2[key * key]) return false;
    if (!obj2[key * key]) return false;
  }
  return true;
}

console.log(chckSqreInOthrAray([5, 8, 9, 5], [81, 64, 81, 25]));

// let arr = [3, 4, 5, 6];

// let modifiedArr = arr.map(function(element){
//     return element *3;
// });

// console.log(modifiedArr)
