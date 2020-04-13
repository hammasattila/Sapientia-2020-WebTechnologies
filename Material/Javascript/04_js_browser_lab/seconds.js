//időzítő függvények a böngészőben
// a használt setInterval() és clearInterval() függvények 
// a window objektum függvényei

var run = null;   //globalis valtozo, ebben lesz a setInterval
//altal visszaadott azonositó , ami egy egész szám
//a window objektumban van létrehozva

//ezt a függvényt fogjuk periódikusan  meghívni
function pislog() {
    var d = new Date();      //dátum objektum,  a pillanatnyi időt tartalmazza
    var s = d.getSeconds();  //a pillanatnyi szekundum 

    if (s < 10)
        s = "0" + s;          //átalakítjuk sztringgé a számot
    else
        s = "" + s;

    var e = document.getElementById('para'); // referencia a paragrafusra
    e.innerHTML = s;          //beírjuk a paragrafus szöveg tartalmába
}

//átállítja az időzítőt
function switchTimer() {
    if (run) {               //ha fut
        clearInterval(run);  //leállítás
        var e = document.getElementById('para');
        e.innerHTML = 'Start!';
        run = null;
    } else                   //ha nem fut
    {
        run = setInterval(pislog, 1000);            //indítás, 1 szekundum időzítés
        // a setInterval() függvény beállítja a ''-ben levő kód
        // 1000 milliszekundumonkénti meghívását
        // visszatérített értek egy 0-tól különböző azonosító
        // amit eltárolunk
        // ezt kell odaadni a clearInterval() függvénynek amikor
        // le akarjuk állítani az ismétlést

        //ha a pislog függvény további paraméterekkel rendelkezik, az 
        //intervallum után fel lehet őket sorolni
    }
    return false;
}

window.onload = function () {
    $("para").addEventListener("click", switchTimer, false);
}