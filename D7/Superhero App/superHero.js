function getSuperHero(name){
    fetch(`https://superheroapi.com/api.php/2010389372655902/search/${name}`)
    .then(response=>response.json())
    .then(json=>{
        let superhero=json.results[0].image.url
        console.log(superhero)
        hero=document.getElementById("image")
        hero.style.width="300px"
        hero.style.height="300px"
        hero.src=superhero
        
    })

    
}

function getNewHero(){

    hero= document.getElementById('search').value
getSuperHero(hero)
}