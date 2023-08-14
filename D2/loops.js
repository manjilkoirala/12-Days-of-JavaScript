const groceries=['🍎','🍌','🥭','🍊'];

//Using for loop

for(let i=0;i<groceries.length;i++){
    console.log(groceries[i]);
}


//for of loop

const numbers=[1,2,3,4,5,6];

for(const keys of numbers){  //for of loop gives the element of arrays
    console.log(keys)
}

//for in loop

for(const keys in numbers){  
    console.log(keys) //keys hold the index of element of array
    console.log(numbers[keys]) //this will give the element of arrays
}



//Using while loop

let j=0;

while(j<groceries.length){
    console.log(groceries[j]);
    j++

}

let myString="This is me";

for(const char of myString){  //for in loop gives the number of elements in arrays
    console.log(char)
}

//Letter Counter

let count=0;
function letterCounter(phrase){
    for(let letter in phrase){
        count=Number(letter)
        
    }
    return count+1;
}
console.log("Number of letter in Phrase is:",letterCounter("Hi, this is Manjil"))

