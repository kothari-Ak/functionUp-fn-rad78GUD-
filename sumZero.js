// let sumZero=(array)=>{
//     let left=0, right=array.length-1,count=0
// while(left<right){

//  if(array[left]+array[right]>0){ right--}
//  else if(array[left]+array[right]==0){
//      count=count+1;
//      return count
// }
// else  {left++}
// }
// }
// console.log(sumZero([-7,-6,5,6,7]))

// const clothes = ['jacket', 't-shirt'];
// //Question 3 of 20
// //JavaScript
// var values=[1,2,3,4]

// var ans=values.slice(1);

// console.log(ans);

// var count = [1,,3];
// console.log(count);

// function x()

// {

// console.log(y)

// var y=1

// }

// x()


// getXValue(); 
// console.log(x); 
// function getXValue()
// {
//      var x = 10; 
//      return x; 
//     }


const sumZero = arr => {
     let left = 0;
     let right = arr.length - 1;
   
     while (left < right) {
       let sum = arr[left] + arr[right];
       if (sum === 0) console.log([arr[left], arr[right]]);
       else if (sum < 0) left++;
       else right--;
     }
   };
   sumZero([-5,-8,1,5,7,8]);




 let SumZero=(array)=>{
for(let j=0;j<array.length;j++){
     for(let i=j+1;i<array.length;i++){
         if(array[j]+array[i]==0) console.log([array[j], array[i]])
}
}
 }
 SumZero([-4,-3,2,3,4])


 function solution(a,arr,z) {
     let maxFreq= -1
     let freq=new Map();
       for(let i =0 ;i<a;++i){
           let x0=arr[i]-(i)*z
           if(freq.has(x0)){
               freq.set(x0,freq.get(x0)+1)
           }
           else freq.set(x0,1)
           if(freq.get(x0)>maxFreq)
               maxFreq=freq.get(x0)
       }
       return (a-maxFreq)
   }console.log(solution(5,[1, 3 ,3 ,4 ,6],2))

