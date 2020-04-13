//DOM0 szerinti eseménykezelők

//ellenőrzi, hogy ki legyen töltve a mező
//a híváskor megadott this paraméter refrencia az input elemre
function checkInput(form) {
    if (form.szoveg.value === '') {
        alert('Kitöltetlen mező!')
        return false;
    }
    return true;             //a return true/false függvényében lesz vagy
    //nem lesz elküldve az űrlap
}

//hívás elemre való refrenciával és esemény objektummal
function onFocus(elem, e) {
    elem.style.backgroundColor = "lightgray";
    //esemény objeltum a konzolra
    console.log("Esemény objektum",e);
}

//hívás  elemre való refrenciával 
function onBlur(elem) {
    elem.style.backgroundColor = "";
}