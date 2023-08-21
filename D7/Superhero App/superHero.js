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
        power.innerText="🧠Intelligence: "+ superhero.powerstats.intelligence
        
    })}

    function getRandomHero(){
       number= Math.floor(Math.random()*732)
       console.log(number)
       fetch(`https://superheroapi.com/api.php/2010389372655902/${number}`)
    .then(response=>response.json())
    .then(json=>{
        
        hero=document.getElementById("image")
        hero.style.width="300px"
        hero.style.height="300px"
        hero.src=json.image.url
        heroname.innerText=  json.name
        power.innerText="🧠Intelligence: "+json.powerstats.intelligence
    })

    }
    

function getNewHero(){

    hero= document.getElementById('search').value
getSuperHerobyName(hero)
}