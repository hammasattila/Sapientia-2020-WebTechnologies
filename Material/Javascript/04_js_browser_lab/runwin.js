
//doboz mozgató függvény
var moveBox = ( function () { //önkioldó, létrehozza a függvényt fordításkor
    var setIntId = null;    //setInterval Id tárolása
    var clickNo = 0;        //hányadik kattintásnál vagyunk  

    return function (e){  //ez lesz az eseménykezelő függvény
        console.log("click event");

        if (setIntId === null){ //ha nem fut a pass, elindítja

            clickNo = ++clickNo % 4;  //hányadik click, 1,2,3,0,1,2,3,0,...
            console.log("clickNo",clickNo,"setIntId",setIntId);

            function pass (){ //ezt a függvényt hívja a setInterval
                const jump = 10; //mennyit ugorjon pixelben egy lépésben

                let div = e.target; //div elem referencia
                var cStyle = window.getComputedStyle(div);
                var left;
                switch (clickNo){
                    case 1: 
                        left = parseInt(cStyle.left) - jump;
                        if (left<0 ) { 
                            left=0 ;
                        }
                        div.style.left = left + "px";
                        break;
                    case 2:
                        clearInterval(setIntId);setIntId=null; //törölni 
                        break;
                    case 3:
                        clearInterval(setIntId);setIntId=null; //törölni 
                        break;
                    case 0:
                        clearInterval(setIntId);setIntId=null; //törölni 

                        break;
                    default: console.error("rossz click szám");
                }
                //leállítás ha elértük a doboz oldalát
                if (left <= 0){
                    clearInterval(setIntId);
                    setIntId=null;
                }            
            }//pass függvény vége

            console.log("setInterval");
            setIntId = setInterval(pass, 500); //indítás ha null a setIntId

        }
    } //eseménykezelő vége
})();


window.onload = function() {
    $("masodik").addEventListener ("click", moveBox,false);
}