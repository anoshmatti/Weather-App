let weather = {
    apiKey: "ede3de0be534c16b9aed669f9f082f4e",
    fetchWeather: function (city) {
        fetch(
          "https://api.openweathermap.org/data/2.5/weather?q="
           + city 
           + "&units=imperial&appid=" 
           + this.apiKey
        )
            .then((response) => response.json())
            .then((data) => this.displayWeather(data));
    },
    displayWeather: function(data) {
        const { name } = data;
        const { icon, description } = data.weather[0];
        const { temp, humidity } = data.main;
        const { speed } = data.wind;
        document.querySelector(".city").innerText = "Weather in " + name;
        document.querySelector(".icon").src = 
        "https://www.openweathermap.org/img/wn/" + icon + ".png"
        document.querySelector(".description").innerText = description;
        document.querySelector(".temp").innerText = temp + "° F";
        document.querySelector(".humidity").innerText =
         "Humidity: " + humidity + "%";
        document.querySelector(".wind").innerText =
         "Wind Speed: " + speed + "miles/hour";
         document.querySelector(".weather").classList.remove("loading");
         document.body.style.backgroundImage = "url('https://source.unsplash.com/1600x900/?" + name + "')"
        }, 
    search: function () {
        this.fetchWeather(document.querySelector(".search-bar").value);
    },
}; 

document.querySelector(".search button").addEventListener("click", function () {
    weather.search();
});

document.querySelector(".search-bar").addEventListener("keyup", function (event) {
    if (event.key == "Enter") {
        weather.search();
    }
});

weather.fetchWeather("Denver");

