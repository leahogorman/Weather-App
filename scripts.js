// API Key
var apiKey = "0ad01036f2ab800c0683594b20735973"
//  Header
var currentDay = document.getElementById("date")

// Search Variables
var searchInput = document.getElementById("searchInput")
var searchButton = document.getElementById("buttonSearch")

// Variables
var dayForcast = document.getElementById("dayForcastParagraph")
var fiveDayForcast = document.getElementById("fiveDayForcast")
var clearBtn = document.getElementById("clear-search")

// Update the Date
var update = function() {
  currentDayInfo = moment().format("(MM/DD/YY)");
  currentDay.innerHTML = currentDayInfo;
};
setInterval(update, 1);


let searchTerms = localStorage.search ? JSON.parse(localStorage.search) : []
function loadSearchTerms() {
  for(let i=0; i<searchTerms.length; i++) {
    document.querySelector("#recent").innerHTML+=`
    <button class="recent-search" onclick="sideBarSearch('${searchTerms[i]}')">${searchTerms[i]}</button>`
  }
  getWeather(searchTerms[0]);
}

// Ready Function
$(document).ready(function(){
  loadSearchTerms()
});

// onClick Function Search
searchButton.addEventListener("click", function(event){
  event.preventDefault();
  let search = searchInput.value.trim();
    searchTerms.push(search)
    localStorage.setItem("search", JSON.stringify(searchTerms));
    document.querySelector("#recent").innerHTML+=`
              <button class="recent-search" onclick="sideBarSearch('${search}')">${search}</button>`
      getWeather(search)
});

function sideBarSearch( search ) {
 getWeather(search)
}

// Day Weather Results
function getWeather( userInput ) {
const dayUrl = `https://api.openweathermap.org/data/2.5/weather?q=` + userInput + `&units=metric&appid=` + (apiKey);
const fiveDayUrl = `https://api.openweathermap.org/data/2.5/forecast?q=` + userInput + `&appid=fa75f7033f50639a7d544fa934ea0750`;

$.ajax({
    url: dayUrl,
    method: "GET"
  })
    .then(function(response) {
      let iconCode = response.weather[0].icon;
      let iconUrl = "http://openweathermap.org/img/w/" + iconCode + ".png"
      $(".city").html("<h1>" + response.name + "</h1>");
      $("#iconW").attr('src', iconUrl);
      $(".temp").html("<h2>" + response.main.temp + "°C </h2>");
      $(".humidity").text("Humidity: " + response.main.humidity + "%");
      $(".wind").text("Wind Speed: " + response.wind.speed + "mph");

      const currentWeather = response
      console.log("hi there", response)
      let lon = response.coord.lon;
      let lat = response.coord.lat;
      const uvUrl = `http://api.openweathermap.org/data/2.5/uvi?lat=${lat}&lon=${lon}&appid=` + (apiKey);

          $.ajax({
            url: uvUrl,
            method: "GET"
          })
            .then(function(response) {
              $(".uv").html(response.value);

              if (response.value < 3) {
                $(".uv").addClass("green")
              } else if (response.value >= 3 || response.value < 6) {
                $(".uv").addClass("yellow")
              } else if (response.value >= 6 || response.value < 8) {
                $(".uv").addClass("yellow")
              } else if (response.value >= 8 || response.value < 11) {
                $(".uv").addClass("red")
              } else if (response.value >= 11) {
                $(".uv").addClass("purple")
              }
              $('.uv').wrap(`<div class=uvResult> UV Index: </div> `)



            });

    });

    $.ajax({
      url: fiveDayUrl,
      method: "GET"
    })
      .then(function(response) {
        for(let i=0; i < response.list.length; i+=8 ) {
          let temp = response.list[i].main.temp;
          let iconCode = response.list[i].weather[0].icon;
          let iconUrl = "http://openweathermap.org/img/w/" + iconCode + ".png";
          let date = response.list[i].dt_txt;
          let dateSubstring = date.substr(0,10);
          let yearSubstring = dateSubstring.substr(0,4);
          let monthSubstring = dateSubstring.substr(5,6);
          let dateFinal = monthSubstring + "-" + yearSubstring
          let humidity = response.list[i].main.humidity;
          $('#fiveDayForcast').append(`
          <div class="fiveDays">
            <h3 class="five-dates">${dateFinal}</h3>
            <img src="${iconUrl}" id="iconZ">
            <br><br><br>
            <h6 class="five-temp">Temperature: ${temp}</h6>
            <h6 class="five-humidity">Humidity: ${humidity}</h6>
          </div>
           `); 
         } 
       });


  }
  
    function clearAll(){
      localStorage.clear();
      document.querySelector("#recent").innerHTML=""
      searchTerms = []
    }
