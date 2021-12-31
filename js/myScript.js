// Час відліку
var countDownDate = new Date('Jan 1, 2022 00:00:00').getTime();

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

    if (days<=0 && hours<=0 && minutes<=0 && seconds<=0) {
        clearInterval(countDownFunction)
    }

    function addZero(n) {
        return n < 10 ? '0' + n : n;
    }

    // Результат на сайті
    document.getElementById('timer').innerHTML =
        `${addZero(days)}:${addZero(hours)}:${addZero(minutes)}:${addZero(seconds)}`;
}, 1000);
