
function sqreRoot(num){
    if(num==0||num==1) return num
    let i=0, ans=0, j=num
    while(i<=j){
        let mid=Math.floor((i+j)/2)
        let midSqre=mid*mid
        if(midSqre>num) j=mid-1
        else if(midSqre<num){
             ans=mid
             i=mid+1
        }
        else {
            ans=mid
        break;}
    }
return ans

}
console.log(sqreRoot(66
    ))