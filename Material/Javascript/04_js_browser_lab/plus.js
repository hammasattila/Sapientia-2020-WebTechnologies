//az oldal összead két számot gombnyomásra  

//elem kiválasztó függvény id szerint  
function $(id) {
    return document.getElementById(id);
}

//számítás
function szamit(a, b) {
    return a + b;
}

//kiíró és formatáló függvény
function kiIr(s) {
    var p = $("eredmeny");

    //ha szám, akkor két tizedessel
    if (typeof s === "number") {
        s = s.toFixed(2);
    }
    p.innerHTML = s;
}

//eseménykezelő
function gomb(e) { // e az eseményobjektum

    var form = this.form; //a this a button elemre mutat
                  //minden input elemen van egy form nevű referencia
                  //az őt tartalmazó űrlapra

    var sz1 = Number(form.szam1.value); // a két szám konvertálva
    var sz2 = Number(form.szam2.value);

    if (isNaN(sz1) || isNaN(sz2)) {
        kiIr("Az egyik bemenet nem szám!");
        return false;
    }

    var osszeg = szamit(sz1, sz2);
    kiIr(osszeg);
}

//inicializálás  
window.onload = function () {
    $("gomb").addEventListener("click", gomb, false);
}
