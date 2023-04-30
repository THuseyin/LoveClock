var dayEl = document.getElementById("day");
var hourEl = document.getElementById("hour");
var minEl = document.getElementById("min");
var secEl = document.getElementById("sec");

var imgArry = ['img1.jpg', 'img2.jpg', 'img3.jpg' , 'img4.jpg', 'img5.jpg', 'img6.jpg', 'img7.jpg'
, 'img8.jpg', 'img9.jpg',  'img10.jpg' , 'img11.jpg' , 'img12.jpg', 'img13.jpg', 'img14.jpg', 'img15.jpg'
, 'img16.jpg', 'img17.jpg', 'img18.jpg', 'img19.jpg', 'img20.jpg', 'img21.jpg', 'img22.jpg'
, 'img23.jpg', 'img24.jpg', 'img25.jpg', 'img26.jpg', 'img27.jpg', 'img28.jpg'
, 'img29.jpg', 'img30.jpg', 'img31.jpg', 'img32.jpg', 'img33.jpg'];


function updateBgImg(img) {
    directionText = "url('" + "images/" + img + "')"; 
    document.body.style.backgroundImage = directionText;
}



function updateClock() {
  var currentDay = new Date().getDay();
  var currentHour = new Date().getHours();
  var currentMin = new Date().getMinutes();
  var currentSec = new Date().getSeconds();

  switch (currentDay) {
    case 0:
      currentDay = "Mo";
      break;
    case 1:
      currentDay = "Di";
      break;
    case 2:
      currentDay = "Mi";
      break;
    case 3:
      currentDay = "Do";
      break;
    case 4:
      currentDay = "Fr";
      break;
    case 5:
      currentDay = "Sam";
      break;
    case 6:
      currentDay = "Son";
      break;
    default:
      break;
  }

  dayEl.innerText = currentDay;
  hourEl.innerText = currentHour;
  minEl.innerText = currentMin;
  secEl.innerText = currentSec;
  random = Math.random() * 33;
  random = Math.floor(random);
  updateBgImg(imgArry[random]);

  setTimeout(() => {
    updateClock();
  }, 1000);
}

updateClock();

