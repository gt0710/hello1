const API_KEY = "283fb205cd9b7fbe4ac3091c41dd3a98";


function onGeoOk(position) {
const lat = position.coords.latitude;
const lng = position.coords.longitude;
const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`; 
fetch(url).then(response => response.json()).then(data => {
    const weather = document.querySelector("#weather span:first-child");
    const city = document.querySelector("#weather span:last-child");
    city.innerText = data.name; 
    weather.innerText = `${data.weather[0].main} / ${data.main.temp}`
});
}
function onGeoError() {
    alert("You can't check a weather!");
}


navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);