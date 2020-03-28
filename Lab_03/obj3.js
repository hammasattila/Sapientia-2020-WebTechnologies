
let konyv1 = {
    isbn: "9789737953612",
    szerzo: "Oláh-Gál Róbert",
    cim: "Az informatika alapjai közgazdász- és mérnökhallgatóknak",
    kiado: "Scientia Kiadó",
    datum: "2007-01-01",
    ar: 15.58
}

let konyv2 = {
    isbn: "9789737953797",
    szerzo: "Józon Mónika",
    cim: "Általános jogelméleti és polgári jogi ismeretek",
    kiado: "Scientia Kiadó",
    datum: "2008-02-30",
    ar: 36.72
}

let konyv3 = {
    isbn: "9789737953834",
    szerzo: "Kakucs András",
    cim: "Áramlástan",
    kiado: "Scientia Kiadó",
    datum: "2006-11-02",
    ar: 34.64
}

// 1. Módosítsuk a konyv1 objektum árát 33. RON-ra!
konyv1.ar = 33;
console.debug(konyv1);
// 2. Állítsunk be minden objektumon egy szerkeszto nevű tulajdonságot, "Könyves Bagoly" értékkel, és egy oldalszám tulajdonságot oldal névvel, és különböző egész értékekkel a 3 könyvre, pl. 150, 255, 302 .
konyv1.kiado = 'KKönyves Bagoly';
konyv1.oldal = 150;
konyv2.kiado = 'KKönyves Bagoly';
konyv2.oldal = 255;
konyv3.kiado = 'KKönyves Bagoly';
konyv3.oldal = 302;
// 3. Írjunk egy függvényt amely HTML paragrafust állít elő egy könyv adataiból. A függvény bemeneti paramétere legyen egy konyv objektum. Listázzuk ki a paragrafust a konzolra.
function gen_peagraph(konyv) {
    let p = `<p>Könyv:<br>`;
    for (let i in konyv) {
        p += i + ": " + konyv[i] + "<br>";
    }
    return p + "</p>";
}
document.addEventListener('DOMContentLoaded', function () {
    document.getElementsByTagName('body')[0].innerHTML = gen_peagraph(konyv1);
}, false);
console.debug(gen_peagraph(konyv1));
// 4. Tegyük a 3 könyvet egy lista nevű tömbbe!
let lista = [konyv1, konyv2, konyv3];
// 5.Írjunk függvényt, amelynek bemenete a lista és egy isbn szám, és visszaadja az isbnszámmal rendelkező könyv árát, ha nincs megfelelő isbn, akkor undefined értéket adjon vissza.
function finder(konyvek, isbn) {
    try {
        return konyvek.find(element => element.isbn == isbn).ar;
    }
    catch{
        return undefined;
    }
}
console.debug(finder(lista, '9789737953834'));
console.debug(finder(lista, '97897379538340000'));
// 6.Töröljük a listában a 2. könyv szerzo és ar tulajdonságát. Írjunk egy függvényt, amelyik egy tulajdonságokat tartalmazó tömböt és egy konyv objektumot kap paraméterként, és ellenőrzi, hogy egy könyvnek megvan-e minden tulajdonsága a tulajdonság tömbből, ha nincs visszaadja azoknak a tulajdonságoknak az indexét egy tömbben, amelyek nincsenek meg; ha mind megvan, akkor egy logikai true -ad vissza (ezt === true -val lehet ellenőrizni visszatéréskor). Pl. a bemeneti tulajdonság tömb legyen:tulajd = [ "isbn", "szerzo", "cim", "kiado", "datum", "ar" ];a kimenet pedig [1,5] a 2. könyv esetében
delete konyv2.ar;
delete konyv2.szerzo;

function checker(tulajdonsagok, konyv) {
    let missing = [];

    for (let i in tulajdonsagok) {
        if (konyv[tulajdonsagok[i]] === undefined) {
            missing.push(i);
        }
    }

    return missing.length !== 0 ? missing : true;
}

console.debug(checker(["isbn", "ar", "cim", "datum", "szerzo"], konyv2));
console.debug(checker(["isbn", "ar", "cim", "datum", "szerzo"], konyv1));
// 7.A konyvek.js állományt behúzva, a konyvek_fel.html fájlba, írjuk ki a konyvektömbből: 
// ▪a legdrágább könyv adatait,
// ▪a leghosszabb című könyvet (minden sztringnek van length tulajdonsága).
console.debug(konyvek.reduce((prev, current) => (prev.ar > current.ar) ? prev : current));
console.debug(konyvek.reduce((prev, current) => (prev.cim.length > current.cim.length) ? prev : current));