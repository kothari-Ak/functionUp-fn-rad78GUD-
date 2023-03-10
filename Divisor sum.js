
const sum =(a,b,c)=> {
    let num= Math.pow(2,a)*Math.pow(3,b)*Math.pow(0,c)
    console.log(num);
};

sum(2,1,0)


function fizzBuzz(n){
    var i=1
    while(i<=n){
    if(i%5==0 && i%3==0) console.log("FizzBuzz");
else if(i%3==0 && i%5!=0) console.log("Fizz");
else if(i%5==0 && i%3!=0) console.log("Buzz");
else console.log(i);
i++;
}
}
fizzBuzz(15)