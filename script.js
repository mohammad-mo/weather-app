// const weather =
// {
//     apiKey: '7af9f83af7663f60dede4028e5ca555a',
//     fetchWeather: function(city)
//     {
//         fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${this.apiKey}`)
//         .then(response => response.json())
//         .then(data => this.displayWeather(data))
//     },
//     displayWeather: function(data)
//     {
//         const { name } = data
//         const { icon, description } = data.weather[0]
//         const { temp, humidity } = data.main
//         const { speed } = data.wind
//         // console.log(name, icon, description, temp, humidity, speed)
//         document.querySelector('.city').innerText = `Weather in ${name}`
//         document.querySelector('.temp').innerText = `${temp}° C`
//         document.querySelector('.icon').src = `https://openweathermap.org/img/wn/${icon}.png`
//         document.querySelector('.description').innerText = `${description}`
//         document.querySelector('.humidity').innerText = `Humidity: ${humidity}%`
//         document.querySelector('.wind').innerText = `Wind Speed: ${speed} km/h`
//         document.querySelector('.weather').classList.remove('loading')
//         document.body.style.backgroundImage = "url('https://source.unsplash.com/1600x900/?" + name +"')"
//     },
//     search: function()
//     {
//         this.fetchWeather(document.querySelector('.search-bar').value)
//     }
// }

// document.querySelector('.search button').addEventListener('click', () =>
// {
//     weather.search()
// })

// document.querySelector('.search-bar').addEventListener('keyup', (event) =>
// {
//     if (event.key === 'Enter')
//     {
//         weather.search()
//     }
// })

// weather.fetchWeather('london')

class Weather
{
    #apiKey = '7af9f83af7663f60dede4028e5ca555a'

    constructor() {}

    fetchWeather(city)
    {
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${this.#apiKey}`)
        .then(response => response.json())
        .then(data => this.displayWeather(data))
    }

    displayWeather(data)
    {
        const { name } = data
        const { icon, description } = data.weather[0]
        const { temp, humidity } = data.main
        const { speed } = data.wind
        // console.log(name, icon, description, temp, humidity, speed)
        document.querySelector('.city').innerText = `Weather in ${name}`
        document.querySelector('.temp').innerText = `${temp}° C`
        document.querySelector('.icon').src = `https://openweathermap.org/img/wn/${icon}.png`
        document.querySelector('.description').innerText = `${description}`
        document.querySelector('.humidity').innerText = `Humidity: ${humidity}%`
        document.querySelector('.wind').innerText = `Wind Speed: ${speed} km/h`
        document.querySelector('.weather').classList.remove('loading')
        document.body.style.backgroundImage = "url('https://source.unsplash.com/1600x900/?" + name +"')"
    }

    search()
    {
        this.fetchWeather(document.querySelector('.search-bar').value)
    }
}

const weather = new Weather()
weather.fetchWeather('london')

document.querySelector('.search button').addEventListener('click', () =>
{
    weather.search()
})

document.querySelector('.search-bar').addEventListener('keyup', (event) =>
{
    if (event.key === 'Enter')
    {
        weather.search()
    }
})
