// teszt RegExp objektummal

function regexTeszt(e) {

    var f = $("teszt");
    var res =$('res');

    var revalue = f.regex.value;
    //ellenőrzés

    if (revalue == "" || revalue.search(/^\//) == -1
        || revalue.search(/\/(g?i?|i?g?)$/) == -1) {
        res.innerHTML = 'Üres sztring, rossz módosítók vagy hiányzó //, helytelen regex!';
        e.preventDefault();
    }

    var re = eval(revalue); //létrehozzuk a RegExp literált
    console.log(re);

    //s a tesztelt sztring
    var s = f.sztring.value;

    //RegExp függvények
    var t = re.test(s);//true ha illeszkedik, false ha nem
    var a = re.exec(s); //a tömb az illesztésekkel vagy null
    console.log(re.lastIndex);
    //sztring függvények
    var poz = s.search(re); //megadja  a poziciot vagy -1
    var ma = s.match(re);
    if (t) {
        var s = 'Illeszkedik!';
        s +=
            '<br>az exec() találat tömbje: <span style="color:blue">' + a.join(" , ") + '</span>' +
            '<br>az exec() találat indexe: ' + a.index + '</span>' +
            '<br>az első search() pozíció: <span  style="color:blue">' + poz + "</span>" +
            '<br>az match() tömb: <span  style="color:blue">' + ma.join(" , ") + "</span>";
    } else {
        s = 'Nem illeszkedik!';
    }

    res.innerHTML = s;
    e.preventDefault();
    //nem lesz elküldve az űrlap
}

//inicializálás
window.onload = function () {
    $("teszt").addEventListener("submit", regexTeszt, true);
}
