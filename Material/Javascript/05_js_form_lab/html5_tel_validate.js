//a submit eseményre hívódik meg
function checkForm(e) {
    //this a formra mutat
    if (!this.tel.validity.valid) {
        $("errmsg").innerHTML = "Kérjük írjon be egy telefonszámot";
        e.preventDefault(); //ne legyen elküldve
        return false;
    }
    return true;
}

//írás közben, ha hiba után helyes telefonszám
//lesz beírva, a helyes alak megjelenésekor
//töröljük a hibaüzenetet
function inputTel(e) {
    //this az input elemre mutat
    if (this.validity.valid) {
        //előző hibakiírás törlése ha volt ilyen
        $("errmsg").innerHTML = "";
    }
}

//eseménykezelők beállítása
window.onload = function () {
    var form = $("elso");  //a window objektumon jönnek létre, globálisak
    var tel = $("tel");
    var errmsg = $("errmsg");

    form.addEventListener('submit',checkForm,true);
    tel.addEventListener('input',inputTel,true);//helyette lehet még a 
             // keyup, change eseményeket is használni
}
