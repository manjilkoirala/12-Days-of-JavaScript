//Async Code

// const waitingForSoup=()=>console.log('Hi Manjil after 2 sec')

// setTimeout(waitingForSoup,10000)


//Promise
let myPromise = new Promise((myResolve, myReject)=> {
    setTimeout(()=> { 
        isReady=false
        isReady?myResolve("I love You !!"):myReject("I dont love you") }, 3000)
  });
  
  
  
console.log(myPromise.then(value=>console.log(value)).catch(err=>console.log(err)))