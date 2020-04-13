//az oldal figyeli az input elem billentyű eseményeit

//elem kiválasztó függvény id szerint  
function $(id) {
    return document.getElementById(id);
}

//esemény adatait kiíró függvény
// e esemény objektum
// mezo az input mező értéke
function displayInfo(e, mezo) {
    var s = "adatok:";
    var kcode; //a lenyomott billentyű kódja

    //kód leolvasása standard módon
    /*if (e.code){
        kcode=e.code; //ez a jelenlegi standard
    }else{
        kcode=e.keyCode;
    }*/
    kcode = e.keyCode; //ez egy elavult tulajdonság, de gyorsabban
                       //megkapjuk a kódot

    s += " billentyű: " + e.key;
    s += " kód: " + kcode
    s += " mezo:" + mezo;
    s += " shift/ctrl/alt: " + e.shiftKey + "/" + e.ctrlKey + "/" + e.altKey;

    console.log(s);

}

//billentyű lenyomás eseménykezelő
//mindhárom eseményre ide jön
function key(e) {
    var form = $("teszt");
    var mezo = form.mezo.value; //a mezo tulajdonság értékét figyelve
                //látjuk mikor jelenik meg benn e billentyűnek megfelelő
                //karakter kód

    console.log("esemény:" + e.type);

    switch (e.type)   //esemény típusa
    {
        case "keydown":
            displayInfo(e, mezo);
            break;
        case "keypress":
            displayInfo(e, mezo);
            break;
        case "keyup":
            displayInfo(e, mezo);
            break;
        default:
            console.log("nem kezelt esemény" + e.type);
    }

    //az ENTER lenyomása elküldi az űrlapot
    //a keydown fázisban leállíthatjuk ezt 
    if (e.keyCode == 13 && e.type == "keydown") {
        e.preventDefault();
    }

}

//ha submit esemény váltódik ki billentyű lenyomásra
function submit(e) {
    console.log("submit esemény típusa: " + e.type);
}

//inicializálás  
window.onload = function () {
    var form = $("teszt");
    form.mezo.addEventListener("keydown", key, false);
    form.mezo.addEventListener("keypress", key, false);
    form.mezo.addEventListener("keyup", key, false);
    form.addEventListener("submit", submit, false);
}