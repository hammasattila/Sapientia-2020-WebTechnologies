//a feladatokban nem szabad reguláris kifejezéseket használni!
//csak String és egyszerű Array függvényeket


let txt1 = "egy kettő három";
let txt2 = "Csak a háza előtt lassított kicsit gondolatai meg léptei iramán is";
let txt3 = "Már megint savanyú a képem - gondolta, és ettől, ha lehet, még savanyúbb lett";

//minden függvényben kisbetűs szavakkal dolgozzunk, egy 
//sztring kisbetűs változatát így kapjuk meg, ha magyar a szöveg:
let txt2_kis = txt2.toLocaleLowerCase('hu-HU')


//a függvény cserélje fel az első és utolsó szót egy szövegben
// s : többszavas szöveg, szavak szóközzel elválasztva
function exchange(s) {
    begin = s.indexOf(' ', 0);
    for (var end = 0; 0 <= s.indexOf(' ', end); end = s.indexOf(' ', end) + 1);

    return s.substr(end, s.lenght).concat(s.substr(begin, end - begin), s.substr(0, begin));
}

//a függvény randomizálja a szavak sorrendjét egy szövegben
//a Math.random() egy 0 és 1 közötti random számot ad
//K-nál kisebb random számot így kapunk
//  let r = Math.floor(Math.random()*K);
//a szavakat vegyük ki egy tömbbe, randomizáljuk az elemeit,
//majd alakítsuk ismét mondattá
// s : többszavas szöveg, szavak szóközzel elválasztva
function shufWords(s) {
    let t = s.split(' ');
    for (i in t) {
        let j = Math.floor(Math.random() * t.length - .0);
        t[i] = [t[j], t[j] = t[i]][0];
    }
    return t.reduce((res, word) => res.concat(' ', word), ' ').trim();
}

//a függvény kiveszi egy mondatból a leghosszabb és legrövidebb szót
//egy objektumot ad vissza: { shortest: "szó", longest: "szó"}
// s : többszavas szöveg, szavak szóközzel elválasztva
function getShortLong(s) {
    return { shortest: s.split(' ').reduce((acc, word) => acc.length < word.length ? acc : word, s.split(' ')[0]), longest: s.split(' ').reduce((acc, word) => acc.length < word.length ? word : acc, ' ') }
}

//a függvény alakítsa át minden szó első betűjét nagybetűsre
// s : többszavas szöveg, szavak szóközzel elválasztva
function upperFirst(s) {
    return s.split(' ').map(word => word[0].toUpperCase() + word.slice(1)).reduce((res, word) => res.concat(' ', word), ' ').trim();
}

//a függvény szúrjon be egy szó köré idézőjelet, 
//ha a szó megvan a szövegben
//vissza: módosított szöveg ha sikerül, false: ha nincs a szövegben ilyen szó
// s : többszavas szöveg, szavak szóközzel elválasztva
function insertQuote(s, szo) {
    return s.split(' ').reduce((acc, word) => acc = { text: acc.text.concat((word === szo ? '"' + word + '"' : word) + ' '), ret: acc.ret === false && word !== szo ? false : acc.text.concat((word === szo ? '"' + word + '"' : word) + ' ') }, { ret: false, text: '' }).ret;
}

console.debug(txt1, ' => ', exchange(txt1));
console.debug(txt2, ' => ', shufWords(txt2));
console.debug(txt2, ' => ', getShortLong(txt2));
console.debug(txt2, ' => ', upperFirst(txt2));
console.debug(txt1, ' => ', insertQuote(txt1, 'egy'));
console.debug(txt1, ' => ', insertQuote(txt1, 'negy'));