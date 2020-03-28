
//példa string függvények használatára
var s = "első második harmadik";

var ix = s.indexOf(" ");
var elso = s.substring(0, ix);  //az ix-nél levő érték nem kerül be a szubsztringbe
console.log("elso:" + elso); //első

var ix1 = s.lastIndexOf(" ");
var masodik = s.substring(ix + 1, ix1); //második

//vagy:
ix3 = s.search("második"); //a szó elején az index
if (ix3 != -1) {
    var masodik1 = s.substr(ix3, "masodik".length);
}

//szubtringet a slice() függvénnyel is kivehetünk
var sl = s.slice(5,8); //a 5. indextől a 7.-ig veszi ki
console.log("slice:", sl);// más

//a slice működik negatív indexekkel is
var sl = s.slice(-5); //a -5. indextől  sztring végéig ha nincs második paraméter
console.log("slice1:", sl);// madik

var szavak = s.split(" "); //tömb lesz
console.log("szavak:");
for (var i=0; i<szavak.length;i++){
    console.log("index:"+i+ " szó:" + szavak[i]);
}

var forditva = "";
for (var i = szavak.length - 1; i >= 0; i--) {
    forditva = forditva.concat(szavak[i]);
    if (i != 0) {
        forditva = forditva + " ";
    }
}
console.log("fordítva:",forditva);

//helyettesítés
var s1 = s.replace ("második", "negyedik");
console.log(s1);