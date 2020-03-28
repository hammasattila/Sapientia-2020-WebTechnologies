//fordított lengyel jelölésű számológép

var expr1 = "2 3 + .";
var expr2 = "2 3 4 + * 6 - .";
var expr3 = "22 3.7 444 + * 66.5 - .";
//hibás kifejezések
var expr4 = "2 +"; 
var expr5 = "+"; 
var expr6 = "2 3 + /";
var expr7 = "2 3 + . .";

//az expr egy olyan sztring kifejezés, mint a 
//fenti expr1 és expr2
function polishCalc(expr) {
 
    
}

//tesztek

//ha a függvény így dob hibát:
//    throw "hiba üzenet sztring";
//akkor azt így lehet kifogni: 
try{
    polishCalc(expr1);//5
    //polishCalc(expr2);//8
    //polishCalc(expr3);//9782.9
}catch(msg){
    console.error(msg);
}
