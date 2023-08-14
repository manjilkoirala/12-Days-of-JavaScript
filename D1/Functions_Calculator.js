//Without parameter
function sayMyName1(){
    let myName="Manjil";
    console.log(myName);

}

sayMyName1();

//With parameter

function sayMyName(myName){
    // let myName="Manjil";
    console.log(myName);

}

sayMyName("Manjil Koirala");

//Next Example

function greeting(name){
    console.log("Hi nice to meet you,",name);//console.log("Hi nice to meet you "+name)  or console.log("Hi nice to meet you ${name}")
}

greeting("Manjil!")

//Using Return

function sum(a ,b){
    return (a+b)
}

let result= sum(1,2);
console.log("Sum is:",result);


//FoodDiscountCalculator

function diff(a,b){
    return (a-b)
}

function foodDiscountCalc(foodCost, discountPercent){

    discountPrice= foodCost*(discountPercent/100);
    console.log("Discount:",discountPrice);
    totalCost= diff(foodCost,discountPrice);
    return totalCost;
}

cost= foodDiscountCalc(20,20);
console.log("Total Cost:",cost);

//ArrowFunctions
const sumArr=(a,b)=> a+b;
console.log(sumArr(1,3));

