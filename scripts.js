var dayForcast = document.getElementById("dayForcastParagraph")
var fiveDayForcast = document.getElementById("fiveDayForcast")
var apiKey = "0ad01036f2ab800c0683594b20735973"
var icon = document.getElementById("icon")

var cityName = "";
var queryURL = `https://api.openweathermap.org/data/2.5/weather?q=London&appid=0ad01036f2ab800c0683594b20735973`;

$.ajax({
    url: queryURL,
    method: "GET"
  })
    // We store all of the retrieved data inside of an object called "response"
    .then(function(response) {
      let iconCode = response.weather[0].icon;
      let iconUrl = "http://openweathermap.org/img/w/" + iconCode + ".png"
      console.log(queryURL)
      console.log(response)
      console.log(iconUrl)
      $(".city").html("<h1>" + response.name)
      $('#icon').attr('src', iconUrl);

    });