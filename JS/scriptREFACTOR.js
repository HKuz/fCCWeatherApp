/**
 * @author Heather Kusmierz
 * Weather App Using Open Weather Map API
 * Images belong to Heather Kusmierz


$.ajax(url, {
    type: 'GET',
    dataType: 'jsonp',
    success: function(data) { alert("Success"); },
    error: function() { alert('Failed!'); },
    beforeSend: setHeader
});

 */


function handleError(){
    $("#location").html("Sorry, coordinates failed to load.");
}


function setHeader(xhr) {
    // xhr.setRequestHeader("Access-Control-Allow-Origin", "http://api.openweathermap.org");
    xhr.setRequestHeader("Access-Control-Allow-Origin", "https://cors-anywhere.herokuapp.com");
}


$(function(){
    $.ajax("https://ipinfo.io", {
        type: "GET",
        dataType: "jsonp",
        error: handleError,
        success: function(position) {
            var latitude = Number(position.loc.split(",")[0]);
            var longitude = Number(position.loc.split(",")[1]);
            console.log("Lat:", latitude, "\nLon:", longitude);
            var key = "8512de382a192bd2c09fd038bf5c0aca";
            var url = "https://cors-anywhere.herokuapp.com/http://api.openweathermap.org/data/2.5/weather?lat=" + latitude + "&lon=" + longitude +  "&units=metric&APPID=" + key;
            // var url = "https://crossorigin.me/http://api.openweathermap.org/data/2.5/weather?lat=" + latitude + "&lon=" + longitude +  "&units=metric&APPID=" + key;
            // var url = "http://api.openweathermap.org/data/2.5/weather?lat=" + latitude + "&lon=" + longitude +  "&units=metric&APPID=" + key;


            $("#weather").on("click", function(){
                console.log("In the on-click function");
                $.ajax(url, {
                    type: "GET",
                    dataType: "jsonp",
                    error: function(){alert("Error in weather call");},
                    success: function(data) {
                        console.log("Inside OpenWeather success function");
                        var city = data.name;
                        var country = data.sys.country;
                        var temp = data.main.temp; //temp should be in C
                        var forecast = data.weather[0].main;
                        var icon = data.weather[0].icon;
                        var iconUrl = "http://openweathermap.org/img/w/" + icon + ".png";
                        $("#location").html("Location: " + city + ", "+ country);
                        $("#forecast").html("Weather: " + forecast +" <img src='" + iconUrl +"'>");
                        $("#temp").html("Temperature: " + Number(temp).toFixed(1) +" ");
                        $("#degree").html("&deg;C");

                        // Background Image
                        switch (forecast) {
                            case "Thunderstorm":
                                // Storm clouds in New Mexico
                                $(".imghead").css("background-image", "url('../Images/NewMexicoStorm.jpg')");
                                break;
                            case "Drizzle":
                                // Droplets on clover
                                $(".imghead").css("background-image", "url('../Images/WetClovers.jpg')");
                                break;
                            case "Rain":
                                // Fat droplets on grass
                                $(".imghead").css("background-image", "url('../Images/RainonGrass.jpg')");
                                break;
                            case "Snow":
                                // Turkey in the snow
                                $(".imghead").css("background-image", "url('../Images/TurkeyinSnow.jpg')");
                                break;
                            case "Clear":
                                // Palm tree shadows along L'Anse Vata
                                $(".imghead").css("background-image", "url('../Images/PalmShadows.jpg')");
                                break;
                            case "Clouds":
                                // CO sunset
                                $(".imghead").css("background-image", "url('../Images/CloudyCOSunset.jpg')");
                                break;
                            case "Atmosphere":
                                // Morning haze over daisies
                                $(".imghead").css("background-image", "url('../Images/HazeBeckyWhiteDaisies.jpg')");
                                break;
                            default:
                                // Beach sunrise
                                $(".imghead").css("background-image", "url('../Images/BeachSunrise.jpg')");
                        }

                        // Toggle for Temperature Conversion
                        var deg = "C";
                        $("#convert").on("click", function(){
                            if (deg === "C") {
                                temp = (temp * 9/5) + 32;
                                deg = "F";
                            } else {
                                temp = (temp - 32) * 5/9;
                                deg = "C";
                            }
                            $("#temp").html("Temperature: " + Number(temp).toFixed(1));
                            $("#degree").html("&deg;" + deg);
                        });  // End convert onclick function
                    },  // End OpenWeather ajax success function
                    beforeSend: setHeader
                });  // End openweathermap API ajax call
                console.log("End ajax call");
            });  // End weather onclick block
        }  // End ipinfo ajax success function
    });  // End ipinfo ajax call
});  // End closure


/*

Open Weather App Icon URL:
http://openweathermap.org/img/w/'+iconname+'.png'

FORMAT of Open Weather Map API JSON call:

{"coord":{"lon":139,"lat":35},
"sys":{"country":"JP","sunrise":1369769524,"sunset":1369821049},
"weather":[{"id":804,"main":"clouds","description":"overcast clouds","icon":"04n"}],
"main":{"temp":289.5,"humidity":89,"pressure":1013,"temp_min":287.04,"temp_max":292.04},
"wind":{"speed":7.31,"deg":187.002},
"rain":{"3h":0},
"clouds":{"all":92},
"dt":1369824698,
"id":1851632,
"name":"Shuzenji",
"cod":200}

*/
