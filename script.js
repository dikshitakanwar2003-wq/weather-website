const apiKey = "77191cf94296209c6b5a1d1d7261828e";

function getWeather(){

let city = document.getElementById("city").value;

fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
.then(response => response.json())
.then(data => {

document.getElementById("weather").innerHTML =
`
<h2>${data.name}</h2>
<p>Temperature: ${data.main.temp} °C</p>
<p>Weather: ${data.weather[0].main}</p>
`;

});

getForecast(city);

}

function getForecast(city){

fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`)
.then(response => response.json())
.then(data => {

let forecastHTML = "";

for(let i=0;i<5;i++){

let day = data.list[i*8];

forecastHTML += `
<div class="card">
<p>${day.dt_txt.split(" ")[0]}</p>
<p>${day.main.temp} °C</p>
<p>${day.weather[0].main}</p>
</div>
`;

}

document.getElementById("forecast").innerHTML = forecastHTML;

});

}