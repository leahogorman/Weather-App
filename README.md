# Weather_Dashboard
# Description
    For this project we were asked to create a Weather Dashboard for an avid traveler. The idea was that when the person looked up a city they'd find the current and future information for that city.
# HTML and CSS
    For this project for the CSS I used media queries to make the page responsive. It has a view for small screens and mobile devices and changes once the screen is above a certain size.
# Javascript/jQuery/APIs
    START PROMPT
    For this project onload it needed to come up with the last searched destination. In order to make this happen I used local storage. So when the page is loaded it pulls the last location from local storage to provide information for that place.
    API
    I pulled API information from open weather maps and added it to it's needed locations. So the dayUrl responds to the current situation. the fiveDayUrl responds to the five day forcast. Inside each of these functions it pulls the information and then places it in it's specific location. 
    COLOR CHANGE
    In order for the UV Index to change based on the number I added if else statements that depended on the number of the UV index value. If under 2 it came back with green. If over 8 it comes back red.
    Local Storage
    When a search is done, onclick, the information is saved to Local Storage and the search input is added to the recent section. 
# Aids
    This project was done using Open Weather Map APIs
    https://openweathermap.org/
    This project was done with research via jQuery website, the Open Weather Map website, W3Schools and MDN WebDocs
    https://www.w3schools.com/jsref/prop_win_localstorage.asp
    https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage
    https://jquery.com/
# Collaborators
    While this was done individually it was done with instruction from Fil and Daniel.
    https://github.com/c0dehot
    https://github.com/shibeknight
# Links
The Links to the GITHUB site and the Live site are
https://github.com/leahogorman/Weather-App
https://leahogorman.github.io/Weather-App/