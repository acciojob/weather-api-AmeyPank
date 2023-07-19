//your JS code here. If required.
//your JS code here. If required.

// Function to make the API request and display the weather data
function getWeatherData() {
    // API URL for London's weather data
    console.log("Data")
    // let API_KEY = "1f83a6aac95ca415fc0dba306cc1227e"
    var apiUrl = 'https://api.openweathermap.org/data/2.5/weather?q=London&appid=1f83a6aac95ca415fc0dba306cc1227e';

    // Make a GET request to the API
    fetch(apiUrl)
        .then(function (response) {
            // Check if the request was successful
            if (response.ok) {
                // Parse the JSON data from the response
                return response.json();
            }
            throw new Error('Network response was not OK.');
        })
        .then(function (data) {
            // Extract the weather description from the data
            var weatherDescription = data.weather[0].description;

            // Update the weatherData div with the weather information
            var weatherDataDiv = document.getElementById('weatherData');
            weatherDataDiv.textContent = 'Current weather in London: ' + weatherDescription;
        })
        .catch(function (error) {
            console.log('Error:', error.message);
        });
}

// Add a click event listener to the button
var getWeatherButton = document.getElementById('getWeatherButton');
getWeatherButton.addEventListener('click', getWeatherData);