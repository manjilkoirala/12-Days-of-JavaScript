//Random Fruit Select

const randomFruits=(fruits)=>{
    
    random=Math.floor(Math.random()*fruits.length)
    return fruits[random]

    
}
fruits=['🍎','🥭','🍊','🍌']


fruit.innerText= randomFruits(fruits)


//If Else If
const weatherScore=(weather)=>{

let score;

if(weather=='rainy'){
    score=1
}else if(weather=='sunny'){
    score=-1
}else{
    score=0
}
return score;
}

console.log(weatherScore('rainy'))