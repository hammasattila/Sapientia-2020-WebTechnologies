
//legnagyobb páros és páratlan szám számítása
function ln_pp() {
    //itt megoldani
}

function teszt(s, o) {
    console.log(s + " Legnagyobb páros: " + o.paros + " Legnagyobb páratlan: " + o.paratlan);

}

teszt(1, ln_pp());//eredmény:  NaN,NaN
teszt(2, ln_pp(1, 2));//2,1
teszt(3, ln_pp(9)); //NaN,9
teszt(4, ln_pp(2.2, 3.3)); //NaN,NaN
var o = ln_pp(84, 68, 72, 66, 32, 35, "x", 90.6, 800.7, 92, 64, 65, "y", 34, 4, 87, 62, 53, 41, 7);
teszt(4, o); //eredmény:  92,87