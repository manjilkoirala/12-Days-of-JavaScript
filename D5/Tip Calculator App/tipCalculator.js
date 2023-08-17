

const billTotal=document.getElementById('billTotalInput')
const tipTotal=document.getElementById('tipInput')
const numPeople=document.getElementById('numberOfPeople')
const perPersonTotal=document.getElementById('perPersonTotal')

//Number of People in number
let numOfPeople= Number(numPeople.innerText)


//calculateBill()

function calculateBill(){

    //Tip Percentage
    let tipPercentage= (Number(tipTotal.value)/100)*(Number(billTotal.value))
   
    //total Amount
    total=Number(billTotal.value) + tipPercentage;
    afterPerson=total/numOfPeople


    //Updating DOM
    perPersonTotal.innerText=`$${afterPerson.toFixed(2)}`;
   
}

//Increasing the number of increasePeople()

function increasePeople(){
    numOfPeople+=1
    numPeople.innerHTML=numOfPeople
    calculateBill()
}

//decreasePeople()

function decreasePeople()
{
    if(numOfPeople==1){
        return
    }
    numOfPeople-=1
    numPeople.innerHTML=numOfPeople
    calculateBill()
}


