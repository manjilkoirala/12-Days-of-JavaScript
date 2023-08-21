//Function for Geting superhero by name
function getSuperHerobyName(name){
    fetch(`https://superheroapi.com/api.php/2010389372655902/search/${name}`)
    .then(response=>response.json())
    .then(json=>{
        let superhero=json.results[0]
        console.log(superhero)
        hero=document.getElementById("image")
        hero.style.width="300px"
        hero.style.height="300px"
        hero.src=superhero.image.url
        heroname.innerText=superhero.name
        power.innerText=getStats(superhero)
        
        
    })}



    //Geting random Superhero

    function getRandomHero(){
       number= Math.floor(Math.random()*732)
       
       fetch(`https://superheroapi.com/api.php/2010389372655902/${number}`)
    .then(response=>response.json())
    .then(json=>{
        
        hero=document.getElementById("image")
        hero.style.width="300px"
        hero.style.height="300px"
        hero.src=json.image.url
        heroname.innerText=  json.name
        power.innerText=getStats(json)
        
    })}
    
//Providing value of name
function getNewHero(){

    hero= document.getElementById('search').value
getSuperHerobyName(hero)
}

//Emoji

const statEmoji={
    intelligence:'🧠',
    strength:'💪',
    speed:'⚡',
    durability:'🪘',
    power:'👊',
    combat:'🤺'


}

//Power Stats of superhero

const getStats=(character)=>{
    let stat=  Object.keys(character.powerstats).map(stats=>{
         return `
         ${statEmoji[stats]} ${stats}: ${character.powerstats[stats]}`         
          
          
          
      }
      
      
      )
      return stat.join('')
  }