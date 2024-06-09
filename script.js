
var ApiKey = "d6b00434036cd5f1a4b4313c514d2af8";
const successCallback = (position) =>{
    fetch("https://api.openweathermap.org/data/2.5/weather?lat="+position.coords.latitude+"&lon="+position.coords.longitude+"&appid="+ApiKey).then((response)=>{
    console.log('resolved',response);
    data = response.json();
    return data;
}).then(data=>{
    console.log(data);
    $("#location").text(data.name);
    $("#currentTemp").text((data.main.temp-273.15).toFixed(2)+" °C");
    $("#apparentTemp").text((data.main.temp_min-273.15).toFixed(2)+" °C / "+(data.main.temp_max-273.15).toFixed(2)+" °C Feels like "+(data.main.feels_like-273.15).toFixed(2)+" °C");
    $("#weather").text(data.weather[0].description);
    $("#Humidity").text(data.main.humidity+"%");
    $("#Pressure").text(data.main.pressure+" mb");
    $("#WSp").text(data.wind.speed+" kph");
    $("iconTemp , img").attr("src","https://openweathermap.org/img/wn/"+data.weather[0].icon+"@2x.png");
    var deg = data.wind.deg;
    if(deg<=30 && deg>=0) $("#WDir").text(deg+"° N");
    else if((deg>30 && deg<=60)||(deg>330)) $("#WDir").text(deg+"° NE");
    else if(deg>60 && deg<=120) $("#WDir").text(deg+"° E");
    else if(deg>120 && deg<=150) $("#WDir").text(deg+"° SE");
    else if(deg>150 && deg<=210) $("#WDir").text(deg+"° S");
    else if(deg>210 && deg<=240) $("#WDir").text(deg+"° SW");
    else if(deg>240 && deg<=300) $("#WDir").text(deg+"° W");
    else if(deg>300 && deg<=330) $("#WDir").text(deg+"° NE");
    $("#Vis").text((data.visibility/1000).toFixed(1)+" km");
    var day = new Date(data.dt*1000);
    $("#date").text(day.toDateString());
    if(data.rain) $("#Precip").text(data.rain+" mm");

    
}).catch(err=>{
    console.log('rejected',err);
});
    
};

const errorCallback = (error) => {
    console.log(error);
} 

navigator.geolocation.getCurrentPosition(successCallback,errorCallback);

//var lat=position.json(). 



// const getWeather = async() => {
//     const position = await navigator.geolocation.getCurrentPosition();
//     return position;
// }; 

