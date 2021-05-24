
// DOM
const time = document.querySelector('.time'),
    date = document.querySelector('.date'),
    greeting = document.querySelector('.greeting'),
    name = document.querySelector('.name'),
    focus = document.querySelector('.focus'),
    daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
    months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

const images = ['01.jpg', '02.jpg', '03.jpg', '05.jpg', '06.jpg', '07.jpg', '08.jpg', '09.jpg', '10.jpg', '11.jpg', '12.jpg', '13.jpg', '14.jpg', '15.jpg', '16.jpg', '17.jpg', '18.jpg', '19.jpg', '20.jpg'];

let randomNumber;
let random_img = [];
do {
  randomNumber = images[Math.floor(Math.random() * images.length)];
  if (!random_img.includes(randomNumber)) {
    random_img.push(randomNumber);
  }
} while (random_img.length < 6)
// const random_img = [images[Math.floor(Math.random() * images.length)],
// images[Math.floor(Math.random() * images.length)],
// images[Math.floor(Math.random() * images.length)],
// images[Math.floor(Math.random() * images.length)],
// images[Math.floor(Math.random() * images.length)],
// images[Math.floor(Math.random() * images.length)]];
let i = 0;


// show time
function showTime() {
    let today = new Date(),
        hour = today.getHours(),
        min = today.getMinutes(),
        sec = today.getSeconds();

    // output
    time.innerHTML = `${addZero(hour)}<span>:</span>${addZero(min)}<span>:</span>${addZero(sec)}`;
    setTimeout(showTime, 1000);    
}
function showDate() {
    let today = new Date(),
        dayOfWeek = daysOfWeek[today.getDay()],
        month = months[today.getMonth()],
        day = today.getDate();
   

    // output
    date.innerHTML = `${dayOfWeek}<span>, </span>${day}<span> </span>${month}`;
    setTimeout(showDate, 1000);    
}

// Add zero
function addZero(n) {
    return  (parseInt(n, 10) < 10 ? '0' : '') + n;
}
let img_list = []
for (let j = 0; j < random_img.length; j++) {
  img_list.push(`url("./assets/images/night/${random_img[j]}")`);
}
for (let j = 0; j < random_img.length; j++) {
  img_list.push(`url("./assets/images/morning/${random_img[j]}")`);
}
for (let j = 0; j < random_img.length; j++) {
  img_list.push(`url("./assets/images/day/${random_img[j]}")`);
}
for (let j = 0; j < random_img.length; j++) {
  img_list.push(`url("./assets/images/evening/${random_img[j]}")`);
}

// set background and greeting 
function setBgGreet() {
    let today = new Date(),
    hour = today.getHours(),
    min = today.getMinutes(),
    sec = today.getSeconds();
    // let i = 0;
    let src2 = img_list[hour];
    let img = document.createElement('img');
    src2 = src2.replace('url("', '');
    src2 = src2.replace('")', '');
    img.src = src2;
    document.body.onload = () => {  
      document.body.style.backgroundImage = img_list[hour];
    }
    
    if (hour >=6 && hour < 12) {
        greeting.textContent = "Good morning, ";
    } else if (hour >= 12 && hour < 18) {
    
        greeting.textContent = "Good afternoon, ";
    } else if (hour >=18 && hour < 24) {
    
        greeting.textContent = "Good evening, ";
    } else {
    
        greeting.textContent = "Good night, ";
    }
    document.body.style.transition = "background-image 1s ease-in-out";
    let interval =  1000 * 60 * 60 - min * 1000 * 60 - sec * 1000; 
    setTimeout(setBgGreet, interval);
}

const changeBgImg = document.querySelector('.change-BgImg');
changeBgImg.addEventListener('click', getImage);



function getImage() {
  let today = new Date();
  const src = document.body.style.backgroundImage;
  let src2 = document.body.style.backgroundImage;
  const index = img_list.indexOf(src);
  let img = document.createElement('img');
  src2 = src2.replace('url("', '');
  src2 = src2.replace('")', '');
  img.src = src2;
  img.onload = () => {  
    document.body.style.backgroundImage = img_list[(index+1)%24];
  }
  // document.body.style.backgroundImage = img_list[]; 
  document.body.style.transition = "background-image 1s ease-in-out";
  // setTimeout(getImage, 1000);
} 


// Get Name
function getName() {
    if (localStorage.getItem('name') === null) {
      name.textContent = '[Enter Name]';
    } else {
      name.textContent = localStorage.getItem('name');
    }
  }

  // Set Name
  function setName(e) {
    
    if (e.type === 'keypress') {
      // Make sure enter is pressed
      if (e.which == 13 || e.keyCode == 13) {
        if (e.target.innerText === ''){
            name.textContent = localStorage.getItem('name');
            name.blur();
        } else {
            localStorage.setItem('name', e.target.innerText);
            name.blur();
        }
        
      }
    } else if (e.target.innerText === ''){
        name.textContent = localStorage.getItem('name');
        name.blur();
    } 
  }

  // Get Focus
  function getFocus() {
    if (localStorage.getItem('focus') === null) {
      focus.textContent = '[Enter Focus]';
    } else {
      focus.textContent = localStorage.getItem('focus');
    }
  }
  
  // Set Focus
  function setFocus(e) {
    if (e.type === 'keypress') {
      // Make sure enter is pressed
      if (e.which == 13 || e.keyCode == 13) {
        if (e.target.innerText === ''){
            focus.textContent = localStorage.getItem('focus');
            focus.blur();
        } else {
            localStorage.setItem('focus', e.target.innerText);
            focus.blur();
        }
      }
    } else if (e.target.innerText === ''){
        focus.textContent = localStorage.getItem('focus');
        focus.blur();
    } 
  }
  name.addEventListener('click', () => {
    name.textContent = '';
  })
  name.addEventListener('keypress', setName);
  name.addEventListener('blur', setName);

  focus.addEventListener('click', () => {
    focus.textContent = '';
  })
  focus.addEventListener('keypress', setFocus);
  focus.addEventListener('blur', setFocus);


const blockquote = document.querySelector('blockquote');
const figcaption = document.querySelector('figcaption');
const btn = document.querySelector('.btn');

async function getQuote() {  
  const url = `https://cors-anywhere.herokuapp.com/http://api.forismatic.com/api/1.0/?method=getQuote&format=json&lang=en`;
  const res = await fetch(url);
  const data = await res.json(); 
  blockquote.textContent = data.quoteText;
  figcaption.textContent = data.quoteAuthor;
}
document.addEventListener('DOMContentLoaded', getQuote);
btn.addEventListener('click', getQuote);


const weatherIcon = document.querySelector('.weather-icon');
const temperature = document.querySelector('.temperature');
const humidity = document.querySelector('.humidity');
const weatherDescription = document.querySelector('.weather-description');
const wind = document.querySelector('.wind');
const city = document.querySelector('.city');

async function getWeather() {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city.textContent}&lang=en&appid=9d2842273a5d73e296e1ec197dadc572&units=metric`;
  const res = await fetch(url);
  try {
    const data = await res.json();
    weatherIcon.className = 'weather-icon owf';
    weatherIcon.classList.add(`owf-${data.weather[0].id}`);
    temperature.textContent = `${data.main.temp.toFixed(0)}°C`;
    humidity.textContent = `humidity: ${data.main.humidity.toFixed(0)}%`
    wind.textContent = `wind speed: ${data.wind.speed.toFixed(0)}m/s`
    weatherDescription.textContent = data.weather[0].description;
   
  } catch(err) {
    temperature.textContent = 'City not found';
    weatherDescription.textContent = '';
    humidity.textContent = '';
    wind.textContent  = '';
  }
  
  
}

function getCity() {
    if (localStorage.getItem('city') === null) {
      city.textContent = '[Enter City]';
    } else {
      city.textContent = localStorage.getItem('city');
    }
  }

function setCity(e) {
    if (e.type === 'keypress') {
        // Make sure enter is pressed
        if (e.which == 13 || e.keyCode == 13) {
        if (e.target.innerText === ''){
            city.textContent = localStorage.getItem('city');
            city.blur();
            getWeather();
        } else {
            localStorage.setItem('city', e.target.innerText);
            city.blur();
            getWeather();
        }
        }
    } else {
        localStorage.setItem('city', e.target.innerText);
        getWeather();
    }
      

}
city.addEventListener('click', () => {
    city.textContent = '';
  })
document.addEventListener('DOMContentLoaded', getWeather);
city.addEventListener('keypress', setCity);





// run
showTime();
showDate();
setBgGreet();
getName();
getFocus();
getCity();