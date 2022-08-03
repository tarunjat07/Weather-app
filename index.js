const app = document.querySelector(".weather-app")
const temp = document.querySelector(".temp")
const dateOutput = document.querySelector(".date")
const timeOutput = document.querySelector(".time")
const conditionOutput = document.querySelector(".condition")
const nameOutput = document.querySelector(".name")
const cloudOutput = document.querySelector(".cloud")
const humidityOutput = document.querySelector(".humidity")
const form = document.getElementById("locationInput")
const search = document.querySelector(".search")
const icon = document.querySelector(".icon")
const windOutput = document.querySelector(".wind")
const newyork = document.querySelector(".newyorkCity")
const dublin = document.querySelector(".dublinCity")
const mumbai = document.querySelector(".mumbaiCity")
const paris = document.querySelector(".parisCity")


form.addEventListener("submit" , getData)

async function getData(e){
    e.preventDefault()
    let response = await fetch(`http://api.weatherstack.com/current?access_key=7fdb3ffb2cb6fadb62c8fcfbb23d8224&query=${search.value}`)
    let data = await response.json()
    // let photoResponse = await fetch(`https://api.unsplash.com/photos/random?client_id=pMMGA89Fp3HmQEfoqgagSff-EYgqxnq0M8z8gVK5Z0Y&query=${search.value}`)
    // let photoData = await photoResponse.json()
    // console.log(photoData)

    if (data.success === false) {
        window.alert("Enter Real City Name")
    } else{

        let tempData = data.current.temperature
        let cityName = data.location.name
        let condition = data.current.weather_descriptions
        let weatherIcon = data.current.weather_icons[0]
        let cloud = data.current.cloudcover
        let humidity = data.current.humidity
        let wind = data.current.wind_speed
        let time = data.location.localtime


        temp.innerHTML = `${tempData}&#176;`
        nameOutput.innerText = cityName
        conditionOutput.innerText = condition
        icon.setAttribute("src", weatherIcon)
        icon.style.height = "50px"
        cloudOutput.innerText = `${cloud}%`
        humidityOutput.innerText = `${humidity}`
        windOutput.innerText = `${wind}Km/h`
        timeOutput.innerText = time

        console.log(data)
    }

    form.reset()
}

newyork.addEventListener("click" , newFunc)

async function newFunc(e){
    e.preventDefault()
    let response = await fetch(`http://api.weatherstack.com/current?access_key=7fdb3ffb2cb6fadb62c8fcfbb23d8224&query=new york`)
    let data = await response.json()

        let tempData = data.current.temperature
        let cityName = data.location.name
        let condition = data.current.weather_descriptions
        let weatherIcon = data.current.weather_icons[0]
        let cloud = data.current.cloudcover
        let humidity = data.current.humidity
        let wind = data.current.wind_speed
        let time = data.location.localtime


        temp.innerHTML = `${tempData}&#176;`
        nameOutput.innerText = cityName
        conditionOutput.innerText = condition
        icon.setAttribute("src", weatherIcon)
        icon.style.height = "50px"
        cloudOutput.innerText = `${cloud}%`
        humidityOutput.innerText = `${humidity}`
        windOutput.innerText = `${wind}Km/h`
        timeOutput.innerText = time
}

dublin.addEventListener("click" , dubFunc)

async function dubFunc(e){
    e.preventDefault()
    let response = await fetch(`http://api.weatherstack.com/current?access_key=7fdb3ffb2cb6fadb62c8fcfbb23d8224&query=dublin`)
    let data = await response.json()

        let tempData = data.current.temperature
        let cityName = data.location.name
        let condition = data.current.weather_descriptions
        let weatherIcon = data.current.weather_icons[0]
        let cloud = data.current.cloudcover
        let humidity = data.current.humidity
        let wind = data.current.wind_speed
        let time = data.location.localtime


        temp.innerHTML = `${tempData}&#176;`
        nameOutput.innerText = cityName
        conditionOutput.innerText = condition
        icon.setAttribute("src", weatherIcon)
        icon.style.height = "50px"
        cloudOutput.innerText = `${cloud}%`
        humidityOutput.innerText = `${humidity}`
        windOutput.innerText = `${wind}Km/h`
        timeOutput.innerText = time
}


mumbai.addEventListener("click" , mumFunc)

async function mumFunc(e){
    e.preventDefault()
    let response = await fetch(`http://api.weatherstack.com/current?access_key=7fdb3ffb2cb6fadb62c8fcfbb23d8224&query=mumbai`)
    let data = await response.json()

        let tempData = data.current.temperature
        let cityName = data.location.name
        let condition = data.current.weather_descriptions
        let weatherIcon = data.current.weather_icons[0]
        let cloud = data.current.cloudcover
        let humidity = data.current.humidity
        let wind = data.current.wind_speed
        let time = data.location.localtime


        temp.innerHTML = `${tempData}&#176;`
        nameOutput.innerText = cityName
        conditionOutput.innerText = condition
        icon.setAttribute("src", weatherIcon)
        icon.style.height = "50px"
        cloudOutput.innerText = `${cloud}%`
        humidityOutput.innerText = `${humidity}`
        windOutput.innerText = `${wind}Km/h`
        timeOutput.innerText = time
}







