const apiKey ="4dffce52b78949b7a1b174025241802";
const apiUrl = "http://api.weatherapi.com/v1/current.json?";
const searchCity = document.querySelector(".city")
const searchBtn = document.querySelector(".btn")

async function checkWeather(city){
    const response = await fetch(apiUrl+`key=${apiKey}&q=${city}`);
    var data = await response.json();
    console.log(data)
    var secondCity= document.querySelector(".city1").innerHTML;
    var seconddCityT = document.querySelector(".c").innerHTML;
    var seconddCityIcon =document.querySelector(".img").src;
    var seconddCityDesc =document.querySelector(".desc1").innerHTML;
    document.querySelector(".city2").innerHTML=secondCity;
    document.querySelector(".c2").innerHTML=seconddCityT;
    document.querySelector(".img2").src=seconddCityIcon;
    document.querySelector(".desc2").innerHTML=seconddCityDesc;

    document.querySelector(".city1").innerHTML=data.location.name;
    document.querySelector(".c").innerHTML=data.current.temp_c;
    document.querySelector(".img").src=data.current.condition.icon;
    document.querySelector(".desc1").innerHTML=data.current.condition.text;

}

function cityDetector(){
    checkWeather(searchCity.value);
}

searchBtn.addEventListener("click", function(){
    cityDetector();
})
searchCity.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        cityDetector();
    }
});




