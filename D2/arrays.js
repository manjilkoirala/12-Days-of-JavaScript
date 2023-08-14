//Defining array
const groceries=['🍎','🍌','🥭','🍊'];

console.log('Apple:',groceries[0]);
console.log('Banana:',groceries[1]);
console.log('Mango:',groceries[2]);
console.log('Orange:',groceries[3]);

//Using for loop in array(using length)

for(let i=0;i<groceries.length;i++){
    console.log(groceries[i]);
}

//Using push

groceries.push( '🍪'); //add cookies to the array at the end
console.log('Groceries:',groceries);

//Using pop

groceries.pop(); //removes last added element from array(here cookies)
console.log('Groceries:',groceries);

//Slice in array

console.log(groceries.slice(0,4)) //gives element from index 0 to 3

//Using indexOf

console.log(groceries.indexOf('🥭')); //gives index number of the element of array




//sum of numbers in array
let SUM=0;
const sumArray=(numbers)=>{

    for(const number of numbers){
        SUM+=number;
    }
    return { SUM };

}
num=[1,2,3,4,5]

console.log(sumArray(num));