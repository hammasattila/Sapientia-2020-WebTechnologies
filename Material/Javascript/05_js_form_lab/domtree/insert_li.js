//egy lista elemeinek módosítása DOM függvényekkel


//megnézi, hogy egy elem első gyerek eleme ol elem,
//ha nem, akkor létrehozza
//visszatéríti a beszúrt OL elemre a referenciát
//elem: az OL fölötti elem refrenciája
function ujOL(elem) {

    var ol = elem.firstElementChild;

    if (elem.firstElementChild) {
        //van ilyen
        if (elem.firstElementChild.tagName === "OL") {
            return elem.firstElementChild;
        }
    }

    //nincs első gyerek vagy nem OL
    ol = document.createElement("OL");
    //beszúrás hagyományos függvényekkel
    elem.insertBefore(ol, elem.firstElementChild);
    return elem.firstElementChild;
}


//új li elem létrehozása
//e: esemény objektum
function ujLI(e) {

    let szoveg = this.form.szoveg.value;
    let hely_txt = this.form.hely.value.trim();
    if (!szoveg) {
        alert("Üres mező!"); return;
    }

    //ha a hely üres, elsőnek szúrom be
    let hely = 1;
    if (hely_txt != "") {
        hely = parseInt(hely_txt);
        if (isNaN(hely) || hely !== parseInt(hely)) {
            alert("A hely nem egész szám!");
        }
    }

    if (hely < 1) {
        alert("Rossz hely érték!");
    }

    //OL elem, új ha eddig nem volt
    let ol = ujOL($("masodik"));

    let li = document.createElement("li");
    li.textContent = szoveg;

    let liElemek = ol.getElementsByTagName("li");

    if (liElemek[hely - 1]) {
        //van ilyen elem
        let liHely = liElemek[hely - 1];
        ol.insertBefore(li, liHely);
    } else {
        ol.appendChild(li);
    }
}

//egy LI elem törlése
//e: eseményobjektum
function liTorles(e) {
    let li = e.target;
    if (li.tagName == "LI") {
        li.remove();
        //van még li
        let lis = $("masodik").querySelector("OL LI");
        if (!lis) {
            torlesTorles();
        }

    }
}

//törlés mód kikapcsolása
function torlesTorles() {

    let ol = $("masodik").querySelector("OL");
    let tgomb = $("torol");

    tgomb.style.color = "";

    ol.removeEventListener("click", liTorles, false);
    document.body.style.cursor = "";

}

//törlés mód bekapcsolása
function torlesGomb(e) {

    if (this.style.color == "red") {
        torlesTorles();
        return;
    }

    let li = $("masodik").querySelector("OL LI");
    if (!li) {
        alert("Nincs LI az oldalon!")
        return;
    }

    let ol = $("masodik").querySelector("OL");
    ol.addEventListener("click", liTorles, false);

    this.style.color = "red";

    document.body.style.cursor = "not-allowed";
}

window.onload = function () {
    $("bevitel").ujli.addEventListener("click", ujLI, false);
    $("bevitel").torol.addEventListener("click", torlesGomb, false);
}