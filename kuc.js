
"use strict"

// function kux(arr){
//     let map=new Map()
//     for (let keyValue of arr){
// map.set(keyValue,map.get(keyValue)+1||1)
//     }
//     let j=map.entries();
//     console.log( j)
   
// }
// kux([9,8,9,7,6,6])

// let some=[8,0,4,7,6]
// console.log(some.includes(1)?true:false)



// //console.log(str.slice(1,-1))

// let string="Please give Rs 1000"
// console.log(typeof Number.parseInt(string.slice(15)));

// let str="hareKrishna"
// console.log(str.endsWith("a")?true:false)

// class Library{
// constructor(bookList){
//     this.bookList=bookList
//     this.issuedBooks={}
// }

// getBookList(){
//     this.bookList.forEach(book => {
//         console.log(book)
        
//     });
// }

// issueBook(bookName, user){
// if(this.issuedBooks[bookName]=undefined){
//     this.issuedBooks[bookName]=user
// }
// else console.log("this book is already issued");
// }

// returnBook(bookName){
//     delete this.issuedBooks[bookName]
// }
// }
// list=new Library(["Bhagwad", "Mahabharat","Shivpuran"])
// list.getBookList();
// list.issueBook("sundar kand","hari")
// //list.returnBook("Bhagwad")


// let input="07:05:45PM"

// let s=input.split(":")
// console.log(s[2]);
//  var timeFrame = s[2].slice(0)
// var seconds = s[2].slice(0,2);
// console.log(timeFrame, seconds);

let OBjct= function(key,value){
    //this.ke=key,
    //this.val=value
    return this
}

console.log(OBjct(7,8));

