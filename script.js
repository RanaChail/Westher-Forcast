//Initializing the variables
const inputbox = document.querySelector('.input-box');
const searchbtn = document.getElementById('searchbtn');
const weather_img = document.querySelector('.weather-img');
const temparature = document.querySelector('.temparature');
const description = document.querySelector('.description');
const humidity = document.getElementById('humidity');
const wind = document.querySelector('.wind-speed');
const location_not_found = document.querySelector('.location-not-found');
const weather_body = document.querySelector('.weather-body');

async function checkWeather(city){
    const api_key = "3e69825e069dd0b070d6bf56cf2f5765";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;

    const weather_data = await fetch(`${url}`).then(response => response.json());

    //Check location is avaliable or not.
    if(weather_data.cod === `404`){
        location_not_found.style.display = "flex";
        weather_body.style.display = "none";
        return;
    }

    location_not_found.style.display = "none";
    weather_body.style.display = "flex";
    //Temp defined
    temparature.innerHTML = `${Math.round(weather_data.main.temp-273.15)}°C`;
    //Description Defined
    description.innerHTML = `${weather_data.weather[0].description}`;
    //Humidity Defined
    humidity.innerHTML = `${weather_data.main.humidity}%`;
    //Wind Speed Defined
    wind.innerHTML = `${weather_data.wind.speed}Km/h`;

    //Change Images
    switch(weather_data.weather[0].main){
        case 'Clouds':
            weather_img.src = "icons/cloudy.png";
            break;
        case 'Clear':
            weather_img.src = "icons/clear.png";
            break;
        case 'Rain':
            weather_img.src = "icons/rain.png";
            break;
        case 'Mist':
            weather_img.src = "icons/mist.png";
            break;
        case 'Snow':
            weather_img.src = "icons/snow.png";
            break;
        case 'Haze':
            weather_img.src = "icons/haze.png";
            break;
        default:
            weather_data.src = "icons/cloud.png";
    }
    console.log(weather_data);
}

searchbtn.addEventListener('click', ()=>{
    checkWeather(inputbox.value);
});