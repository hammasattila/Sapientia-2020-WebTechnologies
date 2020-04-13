//DOM standard eseménykezelők

//input mező ellenőrzése: legyen kitöltve

//ellenőrzi, hogy ki legyen töltve a mező
//e az esemény objektum
function checkInput(e) {

    if (this.szoveg.value == '' || this.szoveg.value == defaultText) {
        alert('Kitöltetlen mező!')

        e.preventDefault(); //nem fogja elküldeni az űrlapot

        return;
    }
    return;
}

//focus
function focusHandler(e) {
    this.style.backgroundColor = 'lightgray';
    console.log("Az esemény objektum:",e)
}

//blur
function blurHandler(e) {
    this.style.backgroundColor = '';
}

//betöltéskor az addEventListener() függvénnyel
window.onload = function () {

    var form = $('elso'); //referencia az űrlapra

    form.addEventListener("submit", checkInput, true);
    form.szoveg.addEventListener("focus", focusHandler, true);
    form.szoveg.addEventListener("blur", blurHandler, true);

}