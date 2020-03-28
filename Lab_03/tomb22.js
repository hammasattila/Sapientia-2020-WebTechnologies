// a)Készítsünk egy tömböt, amelyben csak a szerzők neve van tömb elemként.
let authors = konyvek.map(book => book.szerzo);
console.debug(authors);
// b)Keressük meg egy könyvet, ha megadjuk az isbn számát (mivel egy adott isbn-hez egy könyv tartozik, a find()első találata ez lesz). Ha nincs találat adjunk vissza null-t
let book;
book = (book = konyvek.find(book => book.isbn == '9789738575097')) === undefined ? null : book;
console.debug(book);
// c)Rendezzük el a könyveket növekvő ár sorrendben.
let books = konyvek.sort((a, b) => a.ar-b.ar)
console.debug(books.map(book => book.ar));
// d)Adjunk vissza egy tömböt amelyben csak az egy szerzős könyvek vannak (tekintsük úgy, hogy akkor egy szerzős a könyv, ha a szerző sztringben nincs vesszőés nincs benn a „szerk.” szöveg).
books = konyvek.filter(book => book.szerzo.indexOf(',') === -1 && book.szerzo.indexOf('szerk.') === -1);
console.debug(books.map(book => book.szerzo));