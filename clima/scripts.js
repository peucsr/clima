const apiKey= "a09e0141716e24b01cf95cbf67d11d9e"

function putDataOnScreen(data) {
    console.log(data)
document.querySelector(".city").innerHTML = "Tempo em " + data.name
document.querySelector(".forecast").innerHTML = Math.floor(data.main.temp) + "°C"
document.querySelector(".humidity").innerHTML = "Umidade: " + data.main.humidity + " %"
document.querySelector(".text-weather").innerHTML = data.weather[0].description
document.querySelector(".img-forecast").src = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`
}

async function searchCity(city) {
    const data = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&lang=pt_br&units=metric
    `).then(Response => Response.json())
    
     putDataOnScreen(data)

}

function clickOnButton() {
    const city = document.querySelector(".input-city").value
    searchCity(city)
}