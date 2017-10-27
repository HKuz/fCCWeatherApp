/**
 * @author Heather Kusmierz
 * Weather App Using Open Weather Map API
 * Images belong to Heather Kusmierz
 */

 var handleLocation = function(position) {
    alert("In getCurrentPosition")
            var latitude = position.coords.latitude;
            var longitude = position.coords.longitude;
            var key = "8512de382a192bd2c09fd038bf5c0aca";
            var url = "https://crossorigin.me/http://api.openweathermap.org/data/2.5/weather?lat=" + latitude + "&lon=" + longitude +  "&units=metric&APPID=" + key;
 }

$(document).ready(function(){
    var testing = true;
    if(navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position){
            alert("In getCurrentPosition")
            var latitude = position.coords.latitude;
            var longitude = position.coords.longitude;
            var key = "8512de382a192bd2c09fd038bf5c0aca";
            var url = "https://crossorigin.me/http://api.openweathermap.org/data/2.5/weather?lat=" + latitude + "&lon=" + longitude +  "&units=metric&APPID=" + key;

            if testing {
                // Hardcoded API call to test page functionality
                var data = {"coord":{"lon":138.93,"lat":34.97},"weather":[{"id":802,"main":"Clouds","description":"scattered clouds","icon":"03n"}],"base":"cmc stations","main":{"temp":9.41,"pressure":1025.25,"humidity":100,"temp_min":9.41,"temp_max":9.41,"sea_level":1035.35,"grnd_level":1025.25},"wind":{"speed":1.12,"deg":255.003},"clouds":{"all":36},"dt":1456318998,"sys":{"message":0.0034,"country":"JP","sunrise":1456262433,"sunset":1456302901},"id":1851632,"name":"Shuzenji","cod":200};
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
                };

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
                });
            }  // End testing block


        // API CALL - NO LONGER FUNCTIONAL BECAUSE OF CHANGES TO API
        /*
        $("#weather").on("click", function(){
            $.getJSON(url, function(dataOther) {
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
                };

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
                });
            });
        });  // End weather on.click block
        */
    });  // End getCurrentPosition block

  } else {
    $("#location").html("Sorry, coordinates failed to load.");
  }
});

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
