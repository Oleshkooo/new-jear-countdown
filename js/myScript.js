// Час відліку
var countDownDate = new Date("Jan 1, 2022 00:00:00").getTime();

// Оновлення таймера щосекунди
var countDownFunction = setInterval(function () {
  // Час на зараз
  var now = new Date().getTime();

  // Проміжок часу
  var gap = countDownDate - now;

  // Вирахування часу д, г, хв, с
  var days = Math.floor(gap / (1000 * 60 * 60 * 24));
  var hours = Math.floor((gap % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((gap % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((gap % (1000 * 60)) / 1000);

  // Додаткові нулі
  var zeroDays = "";
  if (days<10) zeroDays = "0"

  var zeroHours = "";
  if (hours<10) zeroHours = "0"

  var zeroMinutes = "";
  if (minutes<10) zeroMinutes = "0"

  var zeroSeconds = "";
  if (seconds<10) zeroSeconds = "0"

  // Результат на сайті
  document.getElementById("timer").innerHTML =
  zeroDays+days + ":" + zeroHours+hours + ":" + zeroMinutes+minutes + ":" +zeroSeconds+seconds;
}, 1000);
