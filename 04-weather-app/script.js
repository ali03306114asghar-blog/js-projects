const weatherData = {
    "karachi": { temp: 32, desc: "sunny", humidity: 65, wind: 18 },
    "lahore": { temp: 36, desc: "hot", humidity: 45, wind: 12 },
    "islamabad": { temp: 25, desc: "partly cloudy", humidity: 55, wind: 10 },
    "london": { temp: 15, desc: "rainy", humidity: 80, wind: 20 },
    "new york": { temp: 22, desc: "cloudy", humidity: 60, wind: 15 },
    "tokyo": { temp: 28, desc: "clear sky", humidity: 70, wind: 8 },
    "dubai": { temp: 40, desc: "very hot", humidity: 30, wind: 15 },
    "paris": { temp: 18, desc: "overcast", humidity: 75, wind: 12 }
};
function getWeather() {
    const city = document.getElementById('cityInput').value.trim().toLowerCase();
    const weather = weatherData[city];
    const display = document.getElementById('weatherInfo');
    if (weather) {
        document.getElementById('city').textContent = city.charAt(0).toUpperCase() + city.slice(1);
        document.getElementById('temp').textContent = weather.temp + '°C';
        document.getElementById('desc').textContent = weather.desc;
        document.getElementById('humidity').textContent = weather.humidity;
        document.getElementById('wind').textContent = weather.wind;
        display.style.display = 'block';
    } else {
        document.getElementById('weatherInfo').style.display = 'none';
        alert('City not found! Try: Karachi, Lahore, Islamabad, London, New York, Tokyo, Dubai, Paris');
    }
}
document.getElementById('cityInput').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') getWeather();
});
