'use strict'

var run = null;

function pislog() {
    let date = new Date();
    $('para').innerHTML = `${date.getFullYear()}.${date.getMonth().toLocaleString(undefined, { minimumIntegerDigits: 2 })}.${date.getDate().toLocaleString(undefined, { minimumIntegerDigits: 2 })}  ${date.getHours().toLocaleString(undefined, { minimumIntegerDigits: 2 })}:${date.getMinutes().toLocaleString(undefined, { minimumIntegerDigits: 2 })}:${date.getSeconds().toLocaleString(undefined, { minimumIntegerDigits: 2 })}:${date.getMilliseconds().toLocaleString(undefined, { minimumIntegerDigits: 3 })}`;
}

function switchTimer() {
    if (run) {
        clearInterval(run);
        var e = document.getElementById('para');
        e.innerHTML = 'Start!';
        run = null;
    } else {
        run = setInterval(pislog, 1000);
    }
    
    return false;
}

window.onload = function () {
    $("para").addEventListener("click", switchTimer, false);
}