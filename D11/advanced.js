//While Lopp

let num=0
while(num<2){
    console.log('Loop',num)
    num++
}



//Evenlistener
 playDiv= document.getElementById('play')

 playDiv.addEventListener('click',function(){
    console.log('Hello')
 })

//Keyboard Key detect
 document.addEventListener('keydown',function(e){
    if(e.key=='p'){
    console.log('Hi')
    document.getElementById('hi').play()
}
else{
    document.getElementById('twing').play()
}

 })



 //Audio tags

