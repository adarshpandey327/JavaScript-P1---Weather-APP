console.log("initialized...")
const key = "33e67b71632009d69d0b9219f4cb8fc7";
const api_url= "https://api.openweathermap.org/data/2.5/weather?&units=metric&q= ";


const search_box = document.querySelector(".search input");
const search_btn = document.querySelector(".search button");


async function checkWeather(city){
    const response = await fetch(api_url + city + `&appid=${key}`);
    if(response.status==404){
        document.querySelector(".error").style.display="block";
    }
    else{
        document.querySelector(".error").style.display="none";
    }

    var data= await response.json();
    console.log(data);
    const name = data.name;
    // if(name== undefined){
    //     alert("Enter Valid City Name");
    // }
    // else
    {
        document.querySelector(".city").innerHTML= name;
    }
    document.querySelector(".temp").innerHTML= data.main.temp + "°C";
    document.querySelector(".humidity").innerHTML= data.main.humidity+"%";
    document.querySelector(".wind-speed").innerHTML= data.wind.speed+"Km/h";

    const condition = data.weather[0].main;
    
    if(condition=="Clear"){
        document.querySelector(".weather img").src="clear.png";
        document.querySelector(".weather h3").innerHTML=condition + ", Ghum aao Bahar";
    }
    else if(condition=='Clouds'){
        document.querySelector(".weather img").src="clouds.png";
        document.querySelector(".weather h3").innerHTML=condition + ", Mast Mausam";
    }
    else if(condition=="Drizzle"){
        document.querySelector(".weather img").src="drizzle.png";
        document.querySelector(".weather h3").innerHTML=condition + ", Phuhaaar baras ri";
    }
    else if(condition=="Humidity"){
        document.querySelector(".weather img").src="humidity.png";
        document.querySelector(".weather h3").innerHTML=condition + ", Bhot nami hai";
    }
    else if(condition=="Mist"){
        document.querySelector(".weather img").src="mist.png";
        document.querySelector(".weather h3").innerHTML=condition + ", Kohraaa";
    }
    else if(condition=="Rain"){
        document.querySelector(".weather img").src="rain.png";
        document.querySelector(".weather h3").innerHTML=condition + ", Mat jao , bheegoge";
    }
    else if(condition=="Snow"){
        document.querySelector(".weather img").src="snow.png";
        document.querySelector(".weather h3").innerHTML=condition + ", Waao baraf!";
    }
    else{
        document.querySelector(".weather img").src="wind.png";
        document.querySelector(".weather h3").innerHTML=condition + ", Tez Hawayein";
    }
    document.querySelector(".weather").style.display="block";
}
search_btn.addEventListener("click" , ()=>{
    checkWeather(search_box.value);
})
