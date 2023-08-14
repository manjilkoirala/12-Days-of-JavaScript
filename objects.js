//creating an object

const person={
    name:'Manjil Koirala',
    shirt:'White',
    college:'PUSOE',
    semester:'7th'
}

//accessing object using dot notation

console.log(person.name); //gives person's name value
console.log(person.shirt);

//accessing object using bracket notation

console.log(person['college']);
console.log(person['semester']);

//assigning new property to object using dot notation

person.phone= 9816317765;
console.log(person); //outputs object including phone as new property

//assigning new property to object using bracket notation

person['address']="Itahari";
console.log(person); //outputs object including address as new property

//using function
const introduction=(name,shirt)=>{
    const person1={
        name: name,
        shirt:shirt,

    }
    const intro ='Hi this is '+person1.name+'. My shirt color is '+person1.shirt;
    return intro;
}

console.log(introduction("Manjil","Black"));




//Methods in Object
