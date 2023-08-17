

const billTotal=document.getElementById('billTotalInput')
const tipTotal=document.getElementById('tipInput')
const numPeople=document.getElementById('numberOfPeople')
const perPersonTotal=document.getElementById('perPersonTotal')



//calculateBill()

function calculateBill(){
    
    let tipPercentage= (Number(tipTotal.value)/100)*(Number(billTotal.value))
    actualTip=Number(billTotal.value) + tipPercentage;
    afterPerson=actualTip/Number(numPeople.innerText)
    perPersonTotal.innerText='$'+afterPerson;
    if(billTotal.value==''&&tipTotal.value==''){
        perPersonTotal.innerText='$0.00' 
    }
}


