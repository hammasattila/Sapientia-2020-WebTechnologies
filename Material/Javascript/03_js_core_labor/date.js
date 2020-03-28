var nap = [
  "vasárnap",
  "hétfő",
  "kedd",
  "szerda",
  "csütörtök",
  "péntek",
  "szombat"
];
var ho = [
  "január",
  "február",
  "március",
  "április",
  "május",
  "június",
  "július",
  "augusztus",
  "szeptember",
  "október",
  "november",
  "december"
];

var d1 = new Date(); //a pillnatnyi időt tartalmazó objektum
var d2 = new Date(2016, 8, 12, 12, 56, 33, 500); //év, hó, nap, óra, perc, másodperc, miliszekundum
//figyelem, ez 9. hónap , e hónapokat 0-tól indexeli
var d3 = new Date(d1.getTime() + 24 * 3600 * 1000); // 24 órával később d1-hez képest
var d4 = new Date("2016-8-12");
//a Date által létrehozott objektumok fontosabb függvényei:
// d1.toLocaleString() - sztringben az idő, a lokális beállításnak megfelelően
// d1.getFullYear() - év 4 számjeggyel
// d1.getMonth() - hónap 0-11
// d1.getDate() - nap 1-31
// d1.getHours() ... getMinutes() ...  getSeconds()  ... getMilliseconds()
// az UTC időt a következő függvényekkel lehet lekérdezni: getUTCFullYear(), getUTCMonth(), getUTCDay()
// d1.getTime() - milliszekundumok 1970.01.01:T00:00:00 óta
//
// Date.now() - a Date referencia objektumon hívható, pillanatnyi időbélyeg miliszekundumban (1970.01.01:T00:00:00 óta)
