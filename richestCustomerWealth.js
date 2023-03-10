
function richestCustomerWealth(accounts){
let noOfCustomers=accounts.length
let noOfBank=accounts[0].length
let max=0
for(let i=0;i<noOfCustomers;i++){
    let c=0
    for(let j=0;j<noOfBank;j++){
        c+=accounts[i][j]
    }
    if(noOfCustomers>max) max=noOfCustomers

return max}
}