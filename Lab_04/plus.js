'use strict'

function kiIr(str) {
    $("eredmeny").innerHTML = (typeof str === "number" ? str.toFixed(2) : str);
}

function gomb(e) {
    let a = Number(e.szam1.value);
    let b = Number(e.szam2.value);

    if (isNaN(a) || isNaN(b)) {
        kiIr("Az egyik bemenet nem szám!");

        return false;
    }

    kiIr(a + b);
}

window.onload = function () {
    $("gomb").addEventListener("click", () => gomb($('osszeg')));

    $('osszeg').addEventListener('keydown', (event) => {
        if (event.keyCode == 13 && event.type == "keydown") {
            this.gomb($('osszeg'));
        }
    });
    Array.from($('osszeg').children).filter(c => c.type === 'text').map(element => {
        element.addEventListener('mouseover', (event) => {
            if (document.activeElement !== event.target) {
                event.target.style.background = "pink";
            }
        });
        element.addEventListener('mouseout', (event) => {
            if (document.activeElement !== event.target) {
                event.target.style.background = "white";
            }
        });
        element.addEventListener('focus', (event) => {
            event.target.style.background = "lightgray";
        });
        element.addEventListener('blur', (event) => {
            event.target.style.color = (isNaN(Number(element.value)) ? 'red' : 'black');
            event.target.style.background = "white";
        });
    });
}
