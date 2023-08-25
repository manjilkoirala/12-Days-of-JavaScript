//Banking System by Class
class bankClass{
    constructor(money=100){
        this.money=money
        balance.innerText=this.money
    }
   
    deposite(amount){
        this.money+=amount
        balance.innerText=this.money
        money=this.money
        document.getElementById('amount').value=null
        document.getElementById('not').style.color="green"
        not.innerText='Rs.'+amount+' has been credited to your account.'


    }
    withdraw(amount){
        if(amount<=this.money){
        this.money-=amount
        balance.innerText=this.money
        money=this.money
        document.getElementById('amount').value=null
        not.innerText='Rs.'+amount+' has been debited from your account.'
        document.getElementById('not').style.color="red"
        }else{
            not.innerText='Not Enough Balance'
        }

    }
}
const manjil=new bankClass()

function deposite(){
    
    money=document.getElementById('amount').value
    amount=Number(money)

manjil.deposite(amount)


}

function withdraw(amount){
    money=document.getElementById('amount').value
    amount=Number(money)
    manjil.withdraw(amount)
}