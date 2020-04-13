//submit-ra indul
function ellenoriz(e) {
    //a beírt név
    var nev = this.szak.value;
    //a datalist elemek opciói
    //ez egy HTMLCollection
    var lista = $("szaklista").options;
    //készítünk egy tömböt belőlük
    var tomb = Array.from(lista);
    //kivesszük a sztringeket
    var str = tomb.map(function (x) { return x.value });
    console.log("sztring tömb:", str);

    //ellenőrzés
    var ix = str.findIndex(function (s) {
        return s === nev;
    });

    //ha nincs a listában a tömbben név
    if (ix < 0) {
        e.preventDefault();
        $("error").innerHTML = "Nem létező szak név!"
        return false;
    }

    $("error").innerHTML = ""
    return true;

}


window.onload = function () {
    $("elso").addEventListener("submit", ellenoriz, false);
}