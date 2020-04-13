/* a függvények csak HTMl elemeken lépkednek
*/

//ellenőrzi, hogy egy referencia DOM HTML elem
function isElement(elem){
    //egyszerű ellenőrzés
    if(elem.nodeType && elem.nodeType===1){
        return true;
    }
    return false;
}

//visszaadja egy elem N. szintű szülőjét
function parent(elem, n)
{
    var pa; //segéd változó a navigáláshoz

    if (!isElement(elem)){
        console.error("a bemenet nem elem");
        return null;
    } 

    //ha n 1-nél kisebb vagy nem egész szám
    if (n !== parseInt(n) || n < 1) {
        return null;
    }
    
    pa = elem;
    while (n--) { //ha még van szülő
        if(pa.parentElement) {
            pa = pa.parentElement;
        }else{
            return null;
        }
    }
    return pa;
}

//visszatéríti egy gyerek n. testvérét
// n > 0 N. nextElementSibling, ha nincs, akkor null
// n < 0 N. previousElementSibling, ha nincs akkor null
// n == 0 elem
//a nextElementSibling nem működik IE < IE9-ben
function sibling (elem, n)
{
    if (!isElement(elem)){
        console.error("a bemenet nem elem");
        return null;
    } 
    if (n !== parseInt(n)) { //ha n nem egész
        console.error("a bemenet nem egész szám");
        return null;
    }

    if (n == 0) {
        return elem;  //ha n 0
    }

    while (n) {

        if (n > 0) {
            if (elem.nextElementSibling) {
                elem = elem.nextElementSibling;
            } else {
                return null; //nincs n. testvére előre
            }
            n--;
        } else {//(n < 0)

            if (elem.previousElementSibling) {
                elem = elem.previousElementSibling;
            } else {
                return null; //nincs n. testvére visszafele
            }
            n++;
        }
    }
    return elem;
}

//kilistázza egy elem tulajdonságait
function prElem(elem)
{
    if (!isElement(elem)){
        console.error("a bemenet nem elem");
        return ;
    } 
    console.log("Az elem neve:" + elem.nodeName +
        " gyerekek száma: " + elem.children.length +
        " szülő elem: " + elem.parentElement.nodeName +
        //első 10 html karakter
        ", a belsőHTML első 10 karaktere: " + '"' + elem.innerHTML.substr(0,10) + '"'
        );
}

window.onload = function()
{

    //az első kép
    var imgs = document.getElementsByTagName("img");
    var img = imgs[0];

    //első paragrafus
    var paras = document.getElementsByTagName("p");
    var para = paras[0];

    //az első paragrafus 3. testvére jobbra
    prElem(sibling(para,3));
    //a kép nagyapja
    prElem(parent(img,2));

}
