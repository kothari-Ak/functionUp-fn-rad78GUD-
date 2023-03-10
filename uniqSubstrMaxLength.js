
function uniQsubsMaxLength(str){
let start=0, end=0,maxlength=0
let set=new Set()
while(end<str.length){
    if(!set.has(str[end])){
set.add(str[end])
end++
maxlength=Math.max(maxlength,set.size)
}
else {set.delete(str[start])
    start++}
    
}return  maxlength
}
console.log(uniQsubsMaxLength("acbdbeqjrt"))
