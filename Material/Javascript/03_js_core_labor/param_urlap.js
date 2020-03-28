//eseménykezelő az OK gombhoz
function calc(form) {
    var p1 = form.param1.value; //paraméterek sztring típusban
    var p2 = form.param2.value; // 

    console.log("Paraméterek: " + p1 + " " + p2);

    var res = ""; //A res változóba kerüljön az eredmény

    //itt elvégezni a konverziókat és számításokat     

    //eredmény beírása
    var p = document.getElementById("eredmeny");
    p.innerHTML = "eredmény:" + res;
    return false;
}
