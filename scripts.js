var dayForcast = document.getElementById("dayForcastParagraph")
var fiveDayForcast = document.getElementById("fiveDayForcast")

var icon = document.getElementById("icon")
var currentDay = document.getElementById("date")

var searchInput = document.getElementById("searchInput")
var searchButton = document.getElementById("buttonSearch")

// function loadSearchTerms() {
//   searchTerms = localStorage.search ? JSON.parse(localStorage.search) : [];
//   for(let j=0; j < searchTerms.length; j++) {
//     document.querySelector("#recent").innerHTML+=`
//     <button onclick="sideBarSearch('${searchTerms[i]}')">${searchTerms[i]}</button>`
//   }
// }

// function sideBarSearch( search ) {
//   (search);
//   (search);
// }

searchButton.addEventListener("click", function(event){
  event.preventDefault();
  let search = searchInput.value.trim();
    console.log(search);

      // if (searchTerms.indexOf(search)<0) {
      //   searchTerms.push(search);
      // }
      dayWeather(search);
    })

var update = function() {
  currentDayInfo = moment().format("(DD/MM/YY)");
  currentDay.innerHTML = currentDayInfo
};
setInterval(update, 1000);


function dayWeather( userInput ) {
var apiKey = "0ad01036f2ab800c0683594b20735973"
var dayUrl = `https://api.openweathermap.org/data/2.5/weather?q=` + userInput + `&units=metric&appid=` + (apiKey);


$.ajax({
    url: dayUrl,
    method: "GET"
  })
    // We store all of the retrieved data inside of an object called "response"
    .then(function(response) {
      let iconCode = response.weather[0].icon;
      let iconUrl = "http://openweathermap.org/img/w/" + iconCode + ".png"
      console.log(dayUrl)
      console.log(response)
      console.log(iconUrl)
      $(".city").html("<h1>" + response.name + "</h1>");
      $("#iconW").attr('src', iconUrl);
      $(".temp").html("<h2>" + response.main.temp + "°C </h2>");
      $(".humidity").text("Humidity: " + response.main.humidity + "%");
      $(".wind").text("Wind Speed: " + response.wind.speed + "mph");
    });
  }
  // var fiveDayUrl = `https://api.openweathermap.org/data/2.5/forecast?q=london&appid=fa75f7033f50639a7d544fa934ea0750`;

  // $.ajax({
  //     url: fiveDayUrl,
  //     method: "GET"
  // }).then(function (fiveDayResults) {
  //   for ( var i=0; i<fiveDayResults.length; i++) {

  //   }
  // });