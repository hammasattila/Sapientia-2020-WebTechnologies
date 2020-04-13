/*
 ez a fájl olyan eseménykezelő megoldást tartalmaz ami használható régi IE
 böngészőknél is - NEM kell használni  
*/


/*
 * néhány hasznos függvény esemény kezeléshez
 * ezek működnek IE < IE8 esetében is
 * használat előtt az eseménykezelőben át kell
 * írni az esemény objektumot:
 * 
 *    var e = e || window.event;
 *    
 *    IE<I8 esetében az eseménykezelő this referenciája
 *    a window objektumra mutat és nem az elemre, ezért
 *    a cél esemény refrenciáját az alábbi függvénnyel lehet megkapni:
 *    
 *    var elem = getTarget(e);
 * 
 */

/*
 * id szerinti kiválasztást végző függvény
 * id: az elemen levő azonosító sztring
 */
var $ = function (id) {
    return document.getElementById(id);
}

/*
 * általános esemény kezelő beállító függvény
elem: ezen az elemen fogja ki az eseményt
tipus: esemény típusa, pl: "click", "load"
fuggveny: kiszolgáló függvény neve

ha új böngészőkben capturing event típusú kezelőt teszünk
az elemre, nem ezt kell használni, hanem egyszerűen:
   elem.addEventListener(tipus, fuggveny, true);
*/
function setHandler(elem, tipus, fuggveny) {
    if (elem.addEventListener) {   //ha ismeri a DOM standardot
        elem.addEventListener(tipus, fuggveny, false);

    } else if (elem.attachEvent) { //ha Microsoft IE < IE9
        elem.attachEvent("on" + tipus,
            function (event) {
                //IE esetében a függvényben a this nem az elemre
                //hanem a window objektumra mutat             
                //ez a call az elem kontextusában (this = elem
                //futtat, tehát this a cél elemre mutat majd
                return fuggveny.call(elem, event);
            }
        );
    } else {                        //ha csak DOM0
        elem["on" + tipus] = fuggveny;
    }
}

/*
 * leállítja az e esemény implicit következményét
 * pl. link-re kattintás esetében a link követését
 * 
 * régi böngészők esetében, még IE8 is, meghívás:
 *         return cancelDefault(e)
 */
function cancelDefault(e) {
    if (e.preventDefault) { //ha DOM standard
        e.preventDefault();
    }
    if (e.returnValue) {    //ha IE8
        e.returnValue = false;
    }
    return false;        //ha az elemből volt meghívva 
    //pl.: onclick="return fuggveny();"
}

/*
 * leveszi az eseménykezelőt az elemről
 */
function removeHandler(elem, tipus, fuggveny) {
    if (elem.removeEventListener) {
        elem.removeEventListener(tipus, fuggveny, false)
    } else if (elem.detachEvent) //IE<IE8
    {
        elem.detachEvent("on" + tipus, fuggveny);
    } else {
        elem["on" + tipus] = '';
    }

}

/*
 * visszaadja a cél elemet mindkét eseménykezelő 
 * modell esetében
 * e az esemény objektum
*/
function getTarget(e) {
    if (e.target) {
        return e.target;
    }
    return e.srcElement; //régi IE böngészők
}


/*
 * A setHandler() alábbi változata ugyanúgy hívja meg az
 * eseménykezelőt IE<IE8 alatt mint a standard módszer
 * hátránya, hogy nem lehet a kezelőt levenni utólag az elemről
 * 
 * csak akkor kell használni, ha cél, hogy ugyuanúgy írjuk meg az
 * eseménykezelők kódját
 * 
 */
function setHandler1(elem, tipus, fuggveny) {
    if (elem.addEventListener) {   //ha ismeri a DOM standardot
        elem.addEventListener(tipus, fuggveny, false);

    } else if (elem.attachEvent) { //ha Microsoft IE < IE9
        elem.attachEvent("on" + tipus,
            function (event) {
                //IE esetében a függvényben a this nem az elemre
                //hanem a window objektumra mutat             
                //ez a call az elem kontextusában (this = elem
                //futtat, tehát this a cél elemre mutat majd
                return fuggveny.call(elem, event);
            }
        );
    } else {                        //ha csak DOM0
        elem["on" + tipus] = fuggveny;
    }
}

function removeHandler1(elem, tipus, fuggveny) {
    if (elem.removeEventListener) {
        elem.removeEventListener(tipus, fuggveny, false)
    } else if (elem.detachEvent) {
        alert("Nem működik a detachEvent-el beállított eseménykezelő eltávolítása!");
        //ez a fenti call metódust használó csatoló függvény miatt van
        //amelyet nem tároltunk el, így nem lehet levenni az eseménykezelőt
        throw new Error("Eseménykezelő hiba.");
    }
}
