console.log("Script");
let myGlobal=2;
//display the number from 0 to 100, 10 by 10
//10,20,30,40,50,60,70,80,90,100

// create the function
function calculatingTotal(price,qty){
    let subtotal=price*qty;
    return subtotal;
}

function calculatingTaxes(subtotalParam){
    let taxes=subtotalParam*0.16;
    let total=subtotalParam+taxes;
    myGlobal=5;
    return total;
}
// use the function 
let laptop=calculatingTotal(1000,3);
let speakers=calculatingTotal(200,2);


console.log(calculatingTaxes(laptop));//3480
console.log(calculatingTaxes(speakers)); // 464


console.log(myGlobal);// 2



