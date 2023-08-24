apikey='a8e71c9932b20c4ceb0aed183e6a83bb'




function weatherApp(city){
    
const URL = "https://api.openweathermap.org/data/2.5/weather";
  const FULL_URL = `${URL}?q=${city}&appid=${apikey}&units=imperial`;
  weather=fetch(FULL_URL)
  return weather.then((response) =>{return response.json()})
  
}

  
function getCityName(){
    city=document.getElementById('cityinput').value
    weatherApp(city)
    .then(res=>showWeatherData(res))
    .catch(err=>{
        cityname.innerText='City Not Found'
        weathertype.innerText='null'
        temp.innerText='null'
        mintemp.innerText='null'
        maxtemp.innerText='null'

    })
    
    
}

function showWeatherData(weatherData){
    document.getElementById("cityname").innerText = weatherData.name;
    document.getElementById("weathertype").innerText = weatherData.weather[0].main;
    document.getElementById("temp").innerText = weatherData.main.temp;
    document.getElementById("mintemp").innerText = weatherData.main.temp_min;
    document.getElementById("maxtemp").innerText = weatherData.main.temp_max;
}