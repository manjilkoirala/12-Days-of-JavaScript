//Using .map()
const num = [1, 2, 3, 4, 5, 10]

num.map(number => {
    console.log(number)
}
);

//Map returns array
result=num.map(number=>number*3)
console.log(result)

//Function to double array using map
const double=(numb)=>{
    return numb.map(numberr=>numberr*2)
    
}

console.log(double([5,10,15]))

