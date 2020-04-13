
window.onload = function () {
    //bejár egy ul elemet, és kivesz belőle minden szöveg tartalmat

    var ul = document.getElementsByTagName("ul")[0];
    var s = "Az UL elem által tartalmazott szövegek: ";

    //ugyanaz mint 
    //  for(let i=0; i<ul.children.length; i++){ 
    //         let li = ul.children[i]; // ... 
    //  }
    // lásd itt:
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of

    for (let li of ul.children) {
        s += li.textContent + " ";
    }
    $("szovegek").innerHTML =  s ;
}