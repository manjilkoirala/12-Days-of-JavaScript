class car{
    constructor(name,color,speed){
        this.name=name
        this.color=color
        this.speed=speed

    }
    drive(){
       console.log('Driving',this.name)
    }
    brake(){
        
        this.speed-=50
    }
    zeroTO60(){
        setTimeout(()=>{
            console.log('Thats Fast')

        },3000)}
        
    stopSpeed(){
        this.speed=0
    }    

}

const farari=new car('Farari','Red','200')


const bugati=new car('Bugati','White', '300')
bugati.zeroTO60()
console.log('Before Brake',bugati.speed)
bugati.brake()


console.log('After Brake',bugati.speed)
bugati.stopSpeed()
console.log('After Stop',bugati.speed)

Array.prototype.myLenght=function(){
    console.log(this.length)
}

const num=[1,2,4,5,1]

num.myLenght()


//Making own Push method
Array.prototype.myPush=function(item){
    return this[this.length]=item
}

items=[1,2,3]
items.myPush(5)
items.myPush(6)
console.log(items)

