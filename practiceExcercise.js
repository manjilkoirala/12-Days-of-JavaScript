/* 
  TODO: Write a function that sums two numbers
  TODO: Write a function that subtracts two numbers
  TODO: Write a function that divides two numbers.
  TODO: Write a function that multiplies two numbers.
  *NOTE* be sure to handle dividing by zero 😉
  ES5 Syntax: function Add(){}
  ES6 Syntax (Arrow function): const add = () => {}
*/

function add(a,b){
    let sum=a+b;
    return sum;
  }
  
  function sub(a,b){
    let diff=a-b;
    return diff;
  }
  
  function div(a,b){
    let divi=a/b;
    return divi;
    
  }
  
  function mul(a,b){
    let multiply=a*b;
    return multiply;
  }
  
  
  function result(){
    console.log("Sum",add(1,2));
    console.log("Difference",sub(2,1));
    console.log("Division:",div(4,2));
    console.log("Multipication:",mul(2*3));
  }
  result();
  
  console.log('hello from the SUM exercise')
  /* 
    TODO: create a function that console logs the result of any of the above operations.
  */