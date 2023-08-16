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

//.filter


//Using loop to demonstrate how .filter works
const filter=(num,greaternum)=>{
    greater=[];
    for(const number of num){
        if(number>greaternum){
            greater.push(number)

        }
    }
    return greater;
}

console.log(filter([1,2,3,4],2))


//Lets use .filter() method to convert this code

let numbs=[1,2,3,4,5,6]
result= numbs.filter(nums=>nums>3)

console.log(result)


//Array of objects

const actors=[
    {name:'Manjil', college:'PUSOE', semester:'7th',salary:10000},
    {name:'Bishal', college:'PUSET', semester:'6th',salary:100000},
    {name:'Nishan', college:'PUS', semester:'4th',salary:1000000}
]

let details=actors.filter(actor=>actor.salary>10000)
let names= details.map(nam=>nam.name).join(', ')

playground.innerHTML='<h1>'+JSON.stringify(names)+'</h1>'
