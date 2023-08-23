//async and await

// async function getDog(){
//     const response= await fetch('https://dog.ceo/api/breeds/image/random')
//     const data= await response.json()
//     console.log(data.message)
// }

// getDog()


//Example

let myPromise = new Promise((myResolve, myReject)=> {
    setTimeout(()=> { 
        isReady=[true,false][Math.floor(Math.random()*2)]
        isReady?myResolve("I love You !!"):myReject("I dont love you") }, 3000)
  });

  async function exampleAsync(){
    try{
 const ans=await myPromise
 console.log(ans)
    }catch(err){
        console.log(err)
    }
  }

  exampleAsync()