
function strManpulation(str){
    let value,total=0
   
    for(let i=0;i<str.length;i++){
    if(str[i]=="a"||str[i]=="e"||str[i]=="i"||str[i]=="o"||str[i]=="u") value=2
    else value=1
    if(str[i].charCodeAt()==32) continue
    
    
    total=total+value}
    return total
}
console.log(strManpulation("abcdef"))