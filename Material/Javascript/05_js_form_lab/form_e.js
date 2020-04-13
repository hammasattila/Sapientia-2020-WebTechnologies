
var form = null;  //űrlap referencia, globális
var error = [];   //hiba üzenetek : a name neveket gyűjti

//minden mezőre írhatunk ellenőrző függvényt 
//
//a név ellenőrzése
function checkName(mezo) {
    var re = /^\S+\s+\S+$/;
    if (!re.test(mezo.value)) {
        error.push(mezo.name);
    }
}
//e-mail  ellenőrzése
function checkEmail(mezo) {   //egy megközelítő regex az email cím ellenőrzésre
    //a HTML5 spec. szerinti email regex így néz ki:
    //  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    //ez egy egyszerűbb, nem elemez minden email formát
    var re = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/i;
    if (!re.test(mezo.value)) {
        error.push(mezo.name);
    }
}
//jelszó  ellenőrzése
function checkJelszo(mezo) {
    var re = [//több kifejezést kell ellenőrizni
        /\d/, //szám
        /[a-z]/, //kisbetű
        /[A-Z]/, //nagybetű 
        /^.{8,}$/ //legalább 8 karakter
    ];

    for (var i = 0; i < re.length; i++) {
        if (!re[i].test(mezo.value)) {
            error.push(mezo.name);
            break;
        }
    }
}

//második jelszó ellenőrzése
function checkJelszo1(mezo) {
    checkJelszo(mezo); //formátum
    //egyenlőek-e
    if (mezo.value !== mezo.form.jelszo.value) {
        error.push(mezo.name);
        $("passwd_err").style.display = "inline";
    }
}
//feltételek
function checkFeltetelek(mezo) {
    if (!mezo.checked) {
        error.push(mezo.name);
    }
}

//hiba kiíró függvény
function setError(errlist) {
    for (var i = 0; i < errlist.length; i++) {
        var name = errlist[i];
        //az input elem utáni span elem
        //következő testvér elem
        form[name].nextElementSibling.style.color = "red";
    }
}
//hiba törlés
function cleanError() {
    error = [];
    for (var name in fun) {
        form[name].nextElementSibling.style.color = "inherit";
    }
    $("passwd_err").style.display = "none";
}

var fun = {//ellenőrző függvények listája egy objektumban
    nev: checkName,
    email: checkEmail,
    jelszo: checkJelszo,
    jelszo1: checkJelszo1,
    feltetel: checkFeltetelek
};
//teljes form ellenőrzése  
function checkForm(e) {

    form = $("elso");  //globális változóba megy
                        //ugyanez másként: form = e.target
    cleanError();  //ha másodszor próbálkozunk, az előző hibakiírást törölni kell

    for (var mezo in fun) {
        fun[mezo](form[mezo]); //meghívjuk a tesztelő függvényt
    }
    //hiba jelzése a form fölött
    if (error.length != 0) {
        $("hiba").innerHTML = "Hibák vannak az űrlapon!"
        setError(error);
        e.preventDefault();  //nem lesz elküldve az űrlap
    }
    return true;
}
//inicializálás
window.onload = function () {
    $("elso").addEventListener("submit",checkForm,true);
}
