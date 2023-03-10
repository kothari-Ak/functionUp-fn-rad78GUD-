const isPalindromeOrNot = (str) => {
    if(!str.length) return true;
//    let left  = 0, right = str.length - 1;
//    while(left<right){
//     if(str[left]!==str[right])return false;
//     left++;
//     right--;
   //}
   for(let left  = 0, right = str.length - 1;left<right; left++,right--)
   if(str[left]!==str[right]) return false;
   return true;
}
console.log(isPalindromeOrNot('level'))

const isPalindromeOrNotRecursion=(str)=>{
    if(str.length==1) return true
    if(str[0]==str[str.length-1]){
       return isPalindromeOrNotRecursion(str.slice(1,-1))
    }
    return false
}
console.log(isPalindromeOrNotRecursion("0level0"))

function checkPalindrome(str){
    if(str.length === 1) return true;
    if(str.length === 2) return str[0] === str[1];
    if(str[0] === str.slice(-1)) return checkPalindrome(str.slice(1,-1))
    return false;
}

console.log(checkPalindrome('a')) // true
console.log(checkPalindrome('matom')) // false
console.log(checkPalindrome('rotor'))