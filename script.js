const button = document.getElementById('search-button')
const city_name = document.getElementById('city-name')
const city_time = document.getElementById('city-time')
const city_temp = document.getElementById('city-temp')
const locatn = document.getElementById('location')

async function getData(cityName) {
    const promise = await fetch(`http://api.weatherapi.com/v1/current.json?key=98a6cb21340e4a1aa8092317231612&q=${cityName}&aqi=yes`)
    return await promise.json()
}

button.addEventListener("click", async() => {
    const value = city_name.value;
    const data = await getData(value)
    city_time.innerText = `${data.location.localtime}`
    city_temp.innerText = `${data.current.temp_c}Celcius ${data.current.temp_f}Farhenite`
    locatn.innerText = `City: ${data.location.name} || Region: ${data.location.region} || Country: ${data.location.country}`
})