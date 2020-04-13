//HTMl select elem módosítása

//ellenőrzi, hogy legyen egy opció kiválasztva
//és ez nem lehet az első
//a form-ról hívjuk
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
        return false; 
    }
    return true; 
}

//kiírja az űrlap alá a kiválasztást 
//a select elem change eseményére hívjuk
function kivalaszt(e) {
    var sel = this; //SELECT
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
//a 2. form  első gomb click eseménye hívja 
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
    //o.innerHTML = t; //helyett:
    o.setAttribute("textContent", t);

    $("szinek").appendChild(o);

    //itt az innerHTML tulajdonságot módosítjuk, de el 
    //lehet végezni a műveletet új HTML elem beszúrásával is:

    // var uj = '<option value="' + v + '">' + t + '</option>';
    //$("szinek").innerHTML = $("szinek").innerHTML + uj;
}

//töröl egy opciót
//2. form, 2. gomb. click eseménye
function torol(e) {
    var f = this.form;  //űrlap
    var ix = f.index.value; //itt az index

    var i = parseInt(ix); //az index egész számként

    var szinek = $("szinek"); // szinek select elem

    if (szinek.options.length == 1) {
        hiba("Nincs több törölhető opció");
        return false;
    }

    if (isNaN(i) || i < 1 || i > szinek.options.length) {
        hiba("Rossz index szám: " + i);
        return false;
    }

    szinek.remove(i); //törli az opciót
    return true;
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
