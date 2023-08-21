function getSuperHero(url){
    fetch(url)
    .then(response=>response.json())
    .then(json=>{
        let superhero=json.image.url
        console.log(superhero)
        hero=document.getElementById("image")
        hero.style.width="300px"
        hero.style.height="300px"
        hero.src=superhero
        
    })

    
}

getSuperHero('https://superheroapi.com/api.php/2010389372655902/200');