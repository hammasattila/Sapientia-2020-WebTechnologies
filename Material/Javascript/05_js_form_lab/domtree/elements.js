//DOM műveletek, egy paragrafus beszúrása,
//helyettesítése

//return true siker, false hiba

//beszúr egy új paragrafust egy id-vel megadott elem
//első gyerekeként, egy adott szöveggel
function insertParaFirst(id, szoveg) {
    if ( typeof szoveg !== "string" || typeof id !== "string"){
        console.error("hibás bemenet");
        return false;
    }
    var p = document.createElement("P");
    p.innerHTML = szoveg;

    //az elem megkeresése
    var d = $(id);
    if (!d){
        console.error("nincs ilyen id");
        return false;
    }
    d.insertBefore(p, d.firstChild);  //az első csomópont elé szúrja
    return true;
}

//beszúr egy új paragrafust egy id-vel megadott elem
//utolsó gyerekeként, egy adott szöveggel
function insertParaLast(id, szoveg) {
    if ( typeof szoveg !== "string" || typeof id !== "string"){
        console.error("hibás bemenet");
        return false;
    }
    var p = document.createElement("P");
    p.innerHTML = szoveg;

    //az elem megkeresése
    var d = $(id);
    if (!d){
        console.error("nincs ilyen id");
        return false;
    }
    d.appendChild(p);  //utolsó gyerek lesz
    return true;
}

//beszúr egy új paragrafust egy id-vel megadott elem
// N. gyerekeként, ha N-1 -nél kevesebb gyereke van akkor
//utolsónak
function insertParaN (id, N, szoveg)
{
    if ( N < 1 || typeof szoveg !== "string" || typeof id !== "string"){
        console.error("hibás bemenet");
        return false;
    }
    var p = document.createElement("P");
    p.innerHTML = szoveg;
    var d = $(id); //elem
    if (!d){
        console.error("nincs ilyen id");
        return false;
    }
    //az elem alatti paragrafusok megkeresése
    var paras = d.getElementsByTagName("P");
    if ( paras.length < N ){
        //kevesebb gyerek
        d.appendChild(p);
    }else
    {
        //beszúrja az N. elem elé
        d.insertBefore(p,paras[N-1]);
    }
    return true;
}

//helyettesít egy paragrafust,
// egy id-vel megadott elemben egy új paragrafussal
//a helyettesített paragrafus a regi változóban jön
function replacePara(id, szoveg, regi) {
    if ( typeof szoveg !== "string" || typeof id !== "string"){
        console.error("hibás bemenet");
        return false;
    }
    var p = document.createElement("P");
    p.innerHTML = szoveg;

    //az elem megkeresése
    var d = $(id);
    if (!d){
        console.error("nincs ilyen id");
        return false;
    }
    //feltételezzük, hogy a régi jó referencia
    d.replaceChild(p, regi);  //helyettesít
    return true;
}


window.onload = function () {

    let doNothing = false;

    if (!doNothing)
    {
    //új paragrafus beszúrása a "tarto" div első csomópontja elé
    insertParaFirst("tarto", "Új paragrafus szövege - első lesz");
    //az utolsó után
    insertParaLast("tarto", "Új paragrafus szövege - utolsó lesz");
    //egy paragrafus cseréje
    var ps = document.getElementsByTagName("P");

    // 2. paragrafust helyettesíti
    var p2 = ps[1];
    replacePara("tarto", "Új paragrafus szövege - helyettesít",p2);

    //az N. helyre szúródik be
    // insertParaN ("tarto", 1, "Beszúrva 1");
    // insertParaN ("tarto", 2, "Beszúrva 2");
    // insertParaN ("tarto", 10, "Beszúrva 10");
   }
}