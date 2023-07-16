// AS A traveler
// I WANT to see the weather outlook for multiple cities
// SO THAT I can plan a trip accordingly

// GIVEN a weather dashboard with form inputs
// WHEN I search for a city
// THEN I am presented with current and future conditions for that city and that city is added to the search history
// WHEN I view current weather conditions for that city
// THEN I am presented with the city name, the date, an icon representation of weather conditions, the temperature, the humidity, and the wind speed
// WHEN I view future weather conditions for that city
// THEN I am presented with a 5-day forecast that displays the date, an icon representation of weather conditions, the temperature, the wind speed, and the humidity
// WHEN I click on a city in the search history
// THEN I am again presented with current and future conditions for that city

var apiKey= '78a9d52ef2c9fc05aca064bff26c1e28'
// var apiUrl = 'https://api.openweathermap.org/data/2.5/forecast?q='+userCity+'&units=imperial&appid='+apiKey
var searchHistory=[] //array for search history display
var searchButton = document.getElementById('search-button')



function searchCity(){
    var cityInput=document.getElementById('user-text-box')
    var apiUrl = 'https://api.openweathermap.org/data/2.5/forecast?q=Atlanta&units=imperial&appid='+apiKey
    fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        console.log(data)
        displayWeather(data)
      })
      .catch(error => {
        console.error('Error:', error)
      })
} //pulls current weather data for the user entered city

function addSearchHistory(cityName){
 searchHistory.push(cityName) //adds search to searchHistory array
 setLocalStorage('searchHistory', searchHistory) //sets searchHistory to localStorage
}

function displayWeather(data) {
    var cityName= data.city.name
    var cityTemp= data.list[0].main.temp
    var cityHumidity =data.list[0].main.humidity
    var cityWind= data.list[0].wind.speed

 document.getElementById('current-name').innerText='City: '+cityName
 document.getElementById('current-temp').innerText= 'Temperature: '+cityTemp+" F"
 document.getElementById('current-humidity').innerText='Humidity: '+cityHumidity+ '%'
 document.getElementById('current-wind').innerText='Wind: '+cityWind+' mph'
}


searchButton.addEventListener('click', searchCity)