/**
 * @author Heather Kusmierz
 * Weather App Using Open Weather Map API
 */
$(document).ready(function(){
    
    if(navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position){
            var latitude = position.coords.latitude;
            var longitude = position.coords.longitude;
            var key = "8512de382a192bd2c09fd038bf5c0aca";
            var url = "http://api.openweathermap.org/data/2.5/weather?lat=" + latitude + "&lon=" + longitude +  "&units=metric&APPID=" + key;
            
            // Hardcoded api call to test page functionality
            //var data = {"coord":{"lon":138.93,"lat":34.97},"weather":[{"id":802,"main":"Clouds","description":"scattered clouds","icon":"03n"}],"base":"cmc stations","main":{"temp":9.41,"pressure":1025.25,"humidity":100,"temp_min":9.41,"temp_max":9.41,"sea_level":1035.35,"grnd_level":1025.25},"wind":{"speed":1.12,"deg":255.003},"clouds":{"all":36},"dt":1456318998,"sys":{"message":0.0034,"country":"JP","sunrise":1456262433,"sunset":1456302901},"id":1851632,"name":"Shuzenji","cod":200};
      
        $("#weather").on("click", function(){
            $.getJSON(url, function(data) {
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
                        $(".imghead").css("background-image", "url('https://scontent-lga3-1.xx.fbcdn.net/hphotos-xtf1/v/t1.0-9/12006087_10153344948209635_3725998561880396893_n.jpg?oh=de172a619a3f64fc38287b973d45396d&oe=575B138E')");
                        break;
                    case "Drizzle":
                        // Droplets on clover
                        $(".imghead").css("background-image", "url('https://scontent-lga3-1.xx.fbcdn.net/hphotos-xaf1/v/t1.0-9/307632_10151269877594635_1448851021_n.jpg?oh=ed729fe46484de3ee55d6da757f61a58&oe=575F65EA')");
                        break;
                    case "Rain":
                        // Raindrop splashing on the deck
                        $(".imghead").css("background-image", "url('https://scontent-lga3-1.xx.fbcdn.net/hphotos-xaf1/v/t1.0-9/527884_10150964834894635_1142344408_n.jpg?oh=56187e80c07ad4e40018dd29bda8b12f&oe=576462E5')");
                        break;
                    case "Snow":
                        // Turkey in the snow
                        $(".imghead").css("background-image", "url('https://scontent-lga3-1.xx.fbcdn.net/hphotos-xpf1/v/t1.0-9/429295_10150574988309635_1005656985_n.jpg?oh=c12dfe449c543cc892f75e80903b4092&oe=576521F1')");
                        break;
                    case "Clear":
                        // Maroon Bells fishing
                        $(".imghead").css("background-image", "url('https://scontent-lga3-1.xx.fbcdn.net/hphotos-xaf1/v/t1.0-9/1919626_10152391908249635_8910300345734091070_n.jpg?oh=68829a5e97a1a81f20881c2c733fe1dc&oe=572513E8')");
                        break;
                    case "Clouds":
                        // WY sunset
                        $(".imghead").css("background-image", "url('https://scontent-lga3-1.xx.fbcdn.net/hphotos-xat1/v/t1.0-9/1454977_10152413010644635_3031452787922267945_n.jpg?oh=a336f0523b202635e761144c5acead08&oe=575C2A81')");
                        break;
                    case "Atmosphere":
                        // Morning haze over daisies
                        $(".imghead").css("background-image", "url('https://scontent-lga3-1.xx.fbcdn.net/hphotos-xal1/v/t1.0-9/3387_10150964833539635_122899115_n.jpg?oh=0c57eb1e56a0fbc5eebbc709bb6b7537&oe=576964BF')");
                        break;
                    default:
                        $(".imghead").css("background-image", "url('https://scontent-lga3-1.xx.fbcdn.net/hphotos-xfp1/t31.0-8/54456_10151150578214635_1105147400_o.jpg')");
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
        });
    });
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