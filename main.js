let search = document.querySelector("form")
let temprature = document.querySelector("h1")
let weather = document.querySelector("h2")
let city = document.querySelector("h3")
let userInput = document.querySelector("input")
let weather_img = document.querySelector("img")

search.addEventListener("submit", fetchData)


async function fetchData(e) {
    e.preventDefault()
    let response = await fetch(`http://api.weatherstack.com/current?access_key=7e89e6bbd7acdfa8e52eb64861abef97&query=${userInput.value}`)
    let data = await response.json()

    if (data.success === false) {
        window.alert("Enter Real City Name")
    } else {

        let temprature_data = data.current.temperature
        let cityName = data.location.name
        let description = data.current.weather_descriptions
        let weather_icon = data.current.weather_icons[0]

        temprature.innerHTML = `<h1>${temprature_data} &#8451;</h1>`
        city.innerText = cityName
        weather.innerText = description
        weather_img.setAttribute("src", weather_icon)

        if (temprature_data > 20) {
            document.body.style.color = "yellow"
        } else if (temprature_data > 30) {
            document.body.style.color = "orange"
        }



    }

    console.log(data)
    search.reset()
}