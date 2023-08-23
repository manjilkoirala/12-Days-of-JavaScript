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
        isReady?myResolve("Soup is Ready😋 !!"):myReject("No soup today😔") }, 3000)
  });

  async function exampleAsync(){
    let summary=[]
    try{
 const ans=await myPromise
 console.log(ans)
 summary.rating=5
 summary.tip='Rs.100'
 summary.pay='Rs 500'
 console.log({summary})
    }catch(err){
        console.log(err)
        summary.rating=1
 summary.tip=0
 summary.pay=0
 console.log({summary})
    }
  }

  exampleAsync()


  //Example

  const sum= async(a,b)=>a+b

  console.log( sum(1,2).then(value=>console.log(value)))