async function getData() {
  const response = await fetch('https://api.openweathermap.org/data/2.5/weather?zip=62704,us&units=imperial&APPID=b6c4807a012432d74ee04027d76c6011');
  const data = await response.json();
  console.log(data)

  function weatherQuery() {
    const locationData = data.name;
    const iconGraphic = "https://openweathermap.org/img/w/" + data.weather[0].icon + ".png";
    const weatherData = data.weather[0].main;
    const currentTempData = Math.round(data.main.temp);
    const feelsLikeData = Math.round(data.main.feels_like);
    const humidData = data.main.humidity;
    const windSpeedData = Math.round(data.wind.speed);
    const windDirectionData = data.wind.deg;

    const catPic = document.getElementById('cat');
    const city = document.getElementById('city');
    const icon = document.getElementById('icon');
    const conditions = document.getElementById('weather');
    const temp = document.getElementById('temp');
    const humid = document.getElementById('humidity');
    const windSpeed = document.getElementById('windSpeed');
    const windDirection = document.getElementById('windDirection');
    const feelsLike = document.getElementById('feelsLike');

    const degToCard = function(deg){
      if (deg>11.25 && deg<33.75){
        return "NNE";
      }else if (deg>33.75 && deg<56.25){
        return "ENE";
      }else if (deg>56.25 && deg<78.75){
        return "E";
      }else if (deg>78.75 && deg<101.25){
        return "ESE";
      }else if (deg>101.25 && deg<123.75){
        return "ESE";
      }else if (deg>123.75 && deg<146.25){
        return "SE";
      }else if (deg>146.25 && deg<168.75){
        return "SSE";
      }else if (deg>168.75 && deg<191.25){
        return "S";
      }else if (deg>191.25 && deg<213.75){
        return "SSW";
      }else if (deg>213.75 && deg<236.25){
        return "SW";
      }else if (deg>236.25 && deg<258.75){
        return "WSW";
      }else if (deg>258.75 && deg<281.25){
        return "W";
      }else if (deg>281.25 && deg<303.75){
        return "WNW";
      }else if (deg>303.75 && deg<326.25){
        return "NW";
      }else if (deg>326.25 && deg<348.75){
        return "NNW";
      }else{
        return "N"; 
      }
    }

    const degree = degToCard(windDirectionData);

    city.innerText = `${locationData}, IL`;
    icon.setAttribute("src", iconGraphic);
    conditions.innerText = weatherData;
    temp.innerHTML = `${currentTempData}&deg;`;
    humid.innerText = `Humidity: ${humidData}%`;
    windSpeed.innerText = `Wind Speed: ${windSpeedData}mph`;
    feelsLike.innerHTML = `Feels Like: ${feelsLikeData}&deg;`;
    windDirection.innerText = `Wind Direction: ${degree}`;

    if (weatherData === "Clouds") {
      catPic.setAttribute('src', '/img/cat-cannon.jpg');
      catPic.setAttribute('alt', 'Cat in a cannon');
    } else if (weatherData === "Clear") {
      catPic.setAttribute('src', '/img/cat-belly.jpg');
      catPic.setAttribute('alt', 'Cat exposing belly in sun');
    } else if (weatherData === "Thunderstorm") {
      catPic.setAttribute('src', '/img/cat-hide.jpg');
      catPic.setAttribute('alt', 'Cat hiding under bed');
    } else if (weatherData === 'Drizzle') {
      catPic.setAttribute('src', '/img/cat-sleepy.jpg');
      catPic.setAttribute('alt', 'Cat sleeping on lap');
    } else if (weatherData === 'Rain') {
      catPic.setAttribute('src', '/img/cat-blanket.jpg');
      catPic.setAttribute('alt', 'Cat sleeping on lap');
    } else if (weatherData === "Tornado") {
      catPic.setAttribute('src', '/img/cat-hide.jpg');
      catPic.setAttribute('alt', 'Cat hiding under bed');
    } else if (weatherData === "Mist") {
      catPic.setAttribute('src', '/img/cat-squinty.jpg');
      catPic.setAttribute('alt', 'Cat not looking happy');
    } else if (weatherData === "Snow") {
      catPic.setAttribute('src', '/img/cat-xmas.jpg');
      catPic.setAttribute('alt', 'Cat cozy by Christmas tree');
    } else if (weatherData === "Fog" || weatherData === "Smoke" || weatherData === "Haze") {
      catPic.setAttribute('src', '/img/cat-tired.jpg');
      catPic.setAttribute('alt', 'Cat looking sleepy on couch');
    } else {
      catPic.setAttribute('src', '/img/cat-yawn.jpg');
      catPic.setAttribute('alt', 'Cat yawnin his bed');
    }
  }
  weatherQuery();
}

getData();

const mapFacts = [
  'He was rescued on a cold January morning in 2018. My neighbors moved and left the cat to fend for himself. We took him and he\'s been with us ever since.',
  'He loves tunnels so he can get inside and ambush your ankles. We call it "Zoomies".',
  'His favorite animals to watch out the window are bunnies. Birds are a close second.',
  'He is on a prescription food diet that is to reduce stress.',
  'He likes to cuddle with me in bed and then claw my ankles around 4am every day.',
  'He\'s acrobatic and sometimes does cartwheels when playing.',
  'He hates guitars and any loud noises.',
  'His favorite cat treats are Temptations Chicken flavor.',
  'He\'s good at opening doors.',
  'He likes to watch things get flushed down the toilet.',
  'He has many nicknames such as: Mapasaurus, Mapzilla, Mr. Meowgi, Mappy Toots, and Mapadoodle.',
  'His favorite game is "Gophers". This involves us moving stuff under blankets and then watching him pounce.',
  'He drinks water from a flower pot fountain.',
  'He likes to chew on plastic bags.',
  'His favorite place to lounge is a the top of his cat tree. He also likes his ottoman, bed, random chairs, under my desk, and on reusable shopping bags.'
];
const catImg = document.getElementById("cat");
const catImgContainer = document.querySelector('.cat-img');
let count = 0

catImg.addEventListener('click', () => {
  var randomMapFact = mapFacts[Math.floor(Math.random()*mapFacts.length)];
  const fact = document.createElement('div');
  fact.setAttribute('class', 'fact');
  catImg.style.cursor = 'default';
  if (count == 0) {
    count++;
    fact.innerHTML = `<p><span>Map Fact:</span> ${randomMapFact}</p>`;
  } else {
    return false;
  };
  catImgContainer.appendChild(fact);
});