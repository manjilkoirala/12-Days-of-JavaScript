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
