const apikey = "5d066958a60d315387d9492393935c19";
const city = "Lviv";
const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=${apikey}`;

fetch(url)
  .then(response => response.json())
  .then(data => {
    console.log(data);
    const temp = data.main.temp;
    const pressure = data.main.pressure;
    const description = data.weather[0].description;
    const humidity = data.main.humidity;
    const speed = data.wind.speed;
    const deg = data.wind.deg;
    const icon = `http://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    
    document.getElementById("temp").innerHTML = `${temp} &deg;C`;
    document.getElementById("pressure").innerHTML = `${pressure} hPa`;
    document.getElementById("description").innerHTML = description;
    document.getElementById("humidity").innerHTML = `${humidity} %`;
    document.getElementById("speed").innerHTML = `${speed} m/s`;
    document.getElementById("deg").innerHTML = `${deg} &deg;`;
    document.getElementById("icon").src = icon;
  })
  .catch(error => console.error(error));