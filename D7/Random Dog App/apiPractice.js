function fetchDog(){
fetch('https://dog.ceo/api/breeds/image/random')
.then(response=>response.json())
.then(json=>randomDog(json.message))
}

randomDog=(dogs)=>{
   dogDiv= document.getElementById("randomdog")
   dogDiv.src=dogs
   dogDiv.style.width="350px"
   dogDiv.style.height="300px"

 
  
}