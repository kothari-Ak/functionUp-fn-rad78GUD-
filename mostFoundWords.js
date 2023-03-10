
function mostFoundWords(sentences){
    let len=sentences.length
    let max=0
    for(let i=0;i<len;i++){
        console.log(sentences[i]);
        let c=0
        for(let j=0;j<sentences[i].length;j++){
            if(sentences[i][j]== ' ' ) c++
        }
    if(c>max) max=c
    }
return max+1
}

//=====================================================maximum letters in a word=====================================================//

let str="Hare Krishna"
let emptStr=''
let max=0

for(let letter in str){
   console.log(str[letter]);
   if(str[letter]!=" ") emptStr+=str[letter]

if(str[letter]==" "||str[letter]==str.length-1){
    if(emptStr.length>max){
        max=emptStr.length
    }
}
}
console.log(max)


console.log(mostFoundWords(["alice and bob love leet", "Hare Krishna", "this is great thanks very much"]))

