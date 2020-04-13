//egy HTML elem style tulajdonsága a CSS tulajdonságokat
//tartalmazza, mint objektum kulcsok
//ha a tulajdonság összetett angol szó, mint a fontsize, 
//akkor teve jelöléssel: fontSize

function setStyle(e) { 

    $("para").style.color = "green"; // az elem.style tulajdonság tartalmazza a CSS tulajdonságokat
    $("para").style.fontSize = "30pt";

}

//aktuális kiszámított stílusok lekérés
function getStyles (elem){

    var cStyle = window.getComputedStyle(elem);
    console.log("color:", cStyle.color);
    console.log("fontSize:", cStyle.fontSize);

    //az alábbi ciklus kiírja az összes tulajdonságot
    /*
    for ( let t in cStyle ){
        if (cStyle.hasOwnProperty(t)) {
            console.log(t,"=",cStyle[t]);
        }
    }*/
}


window.onload = function () {
    $("para").addEventListener("click", setStyle, false);
    //a paragrafus tulajdonságainak kiírása
    getStyles($("para"));
}


