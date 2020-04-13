//ellenőrzi, hogy legyen egy opció kiválasztva
//és ez nem lehet az első
function checkSelect(e) {
    var error = []; //egyelőre egy hibát kezelünk, de elvileg
    //bővíthető a tesztelt hibák száma

    var sel = this.szinek; //a select elem

    if (sel.selectedIndex == 0) {
        error.push("Nincs kiválasztott szín!")
    }

    if (error.length != 0) {
        $("error").innerHTML = error.join(",");
        e.preventDefault();
    }

    return;

}

//kiírja az űrlap alá a kiválasztást 
//a change esemény hatására hívjuk meg
function kivalaszt(e) {
    var sel = this;
    var msg = "";

    msg += "Kiválasztott opció indexe: " + sel.selectedIndex;

    var opciok = sel.options;
    var ko = opciok[sel.selectedIndex];

    msg += ", az opció értéke: " +
        '<span style="color: ' + ko.value + '">' +
        ko.value + '</span>' +
        ", a megjelenített szöveg: " + ko.text;

    $("kivalasztas").innerHTML = msg;

}

//hozzáad egy új opciót a szinek-hez
function hozzaad(e) {
    var f = this.form;  //űrlap
    var v = f.svalue.value; //itt az új opció value értéke
    var t = f.stext.value; //itt az új opció text értéke

    if (v === "" || t === "") {
        hiba("Üres mező");
        return;
    }

    var o = document.createElement("OPTION");
    o.setAttribute("value", v);
    o.innerHTML = t;
    $("szinek").appendChild(o);


    var uj = '<option value="' + v + '">' + t + '</option>';

    //itt az innerHTML tulajdonságot módosítjuk, de el 
    //lehet végezni a műveletet új HTML elem beszúrásával is
    //$("szinek").innerHTML = $("szinek").innerHTML + uj;
}

//töröl egy opciót
function torol(e) {
    var f = this.form;  //űrlap
    var ix = f.index.value; //itt az index

    var i = parseInt(ix); //az index egész számként

    var szinek = $("szinek"); // szinek select elem

    if (szinek.options.length == 1) {
        hiba("Nincs több törölhető opció");
        return;
    }

    if (isNaN(i) || i < 1 || i > szinek.options.length) {
        hiba("Rossz index szám: " + i);
        return;
    }

    szinek.remove(i); //törli az opciót

}

//kiírja a hiba paragrafusba az üzenetet
function hiba(s) {
    $("error").innerHTML = s;
}

window.onload = function () {
    //űrlap ellenőrzés
    $("tesztform").addEventListener("submit", checkSelect, true);
    //kiírjuk a kiválasztás megváltozását
    $("szinek").addEventListener("change", kivalaszt, true);
    //a módosító űrlap beállítása
    var modform = $("add");
    modform.ok.addEventListener("click", hozzaad, true);
    modform.del.addEventListener("click", torol, true);
}
