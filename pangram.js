
const pangram=(sentence)=>{
let array="abcdefghijklmnopqrstuvwxyz".split('')
for(let i=0;i<sentence.length;i++){
if(array.indexOf(sentence[i])!=-1) return true
else return false
}}
console.log(pangram("abcd efghijk lmnopqrst tuvwxyz"))
