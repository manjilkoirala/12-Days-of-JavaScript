fetch('https://dog.ceo/api/breeds/image/random')
.then(response=>response.json())
.then(json=>randomDog(json.message))


randomDog=(dogs)=>{
    document.getElementById("randomdog").src=dogs
}