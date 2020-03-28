//nem szabad regexet használni

let kisszoveg = "első második harmadik első első negyedik";

//minden függvényben kisbetűs szavakkal dolgozzunk, egy 
//sztring kisbetűs változatát így kapjuk meg, ha magyar a szöveg:
//let txt="ÁéÚű";
//let txt1 = txt.toLocaleLowerCase('hu-HU');


//megszámlálja  hányszor fordul elő egy szó a szövegben 
//text: ebben keresünk
//word: keresett sztring
function countWords(text, word) {
  for (var count = 0, index = 0; 0 <= text.indexOf(word, index); count++, index = text.indexOf(word, index) + 1);

  return count;
}

console.debug(countWords(berci, 'hideg'));
