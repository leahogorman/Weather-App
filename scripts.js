var dayForcast = document.getElementById("dayForcast")
var fiveDayForcast = document.getElementById("fiveDayForcast")
function displayCity(){
    var apiKey = "0ad01036f2ab800c0683594b20735973"

    var location = "Atlanta";
    var queryURL = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}`;
    
    $ajax({
        url: queryURL,
        method: "GET"
    }).then(function(response) {
        console.log(response)
        $(dayForcast).append(
            response
        )
    })
}
