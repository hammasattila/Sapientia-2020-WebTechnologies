//többszintű listát készít az alábbi objektumból
var olista = {
  Első: {
    Piros: {},
    Zöld: {},
    Lila: {}
  },

  Második: {
    Kék: {},
    Fekete: {
      Harmadik: {
        Sárga: {},
        Piros: {}
      }
    },
    Fehér: {}
  }
};

//bemenete egy objektum literál
// a modern DOM módosító függvényeket használja
function createList(o) {
  let keys = Object.keys(o); //tulajdonságok 
  if (keys.length === 0) {
    return null;
  }
  let ul = document.createElement("UL");   //UL
  for (let k of keys) {                    //minden kulcsra
    let li = document.createElement("LI"); //LI
    li.textContent = k;                    //a kulcs mint első tartalom
    let insideUl = createList(o[k]);       //ha van alatta objektum
    if (insideUl) {                        //kulcsokkal
      li.append(insideUl);
    }
    ul.append(li);                         //LI beszúrása
  }
  return ul;
}

window.onload = function() {
  let lista = createList(olista);
  console.log(lista.outerHTML);
  $("tarto").append(lista);
};

//az Object függvényei
/*
var obj = {
    a: 1, b:2 , c:3
}
console.log (Object.keys(obj));
console.log (Object.values(obj));
console.log (Object.entries(obj));
*/