// Час відліку
let nextYear = new Date().getFullYear() + 1
let countDownDate = new Date(`Jan 1, ${nextYear} 00:00:00`).getTime();

// Оновлення таймера щосекунди
let countDownFunction = setInterval(() => {
    // номер року
    let nextYear = new Date().getFullYear() + 1
    let newJear = document.querySelector('#newJear')
    newJear.innerHTML = `${nextYear} year in`

    // Час на зараз
    let now = new Date().getTime();

    // Проміжок часу
    let gap = countDownDate - now;

    // Вирахування часу д, г, хв, с
    let days = Math.floor(gap / (1000 * 60 * 60 * 24));
    let hours = Math.floor((gap % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((gap % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((gap % (1000 * 60)) / 1000);

    function addZero(n) {
        return n < 10 ? '0' + n : n;
    }

    // Результат на сайті
    document.getElementById('timer').innerHTML =
        `${addZero(days)}:${addZero(hours)}:${addZero(minutes)}:${addZero(seconds)}`;
}, 1000);
