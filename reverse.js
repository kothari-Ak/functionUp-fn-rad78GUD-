
function reverseWord(s){
    let str=""
for(let i=s.length-1;i>=0;i--){
    str+=s[i]
}
return str
}

function revArray(array){
    let some=""
    for(let i=0;i<array.length;i++){
        if(array[i]!=""){
       some=reverseWord(array) } }
    return some
}

//console.log(reverseWord(["Hare Krishna"]))




console.log(revArray("Hare Krishna"))

function reverseWords(s){
    let w=""
    let ans=""
    for(let i=0;i<s.length;i++){
        if(s[i]==' '){
w=reverseWord(w)
ans+=w
ans+=" "
w=""
        }
        else{
            w+=s[i]
        }
    }
    if(w!=""){
        w=reverseWord(w)
        ans+=w
         
    }
    return ans
}

const reverseWithRecursion=(str)=>{
    if(str.length==0) return str
    return reverseWithRecursion(str.slice(1))+str[0]
}
console.log(reverseWithRecursion("HareKrishna"))
console.log(reverseWords("Hare Krishna"))

