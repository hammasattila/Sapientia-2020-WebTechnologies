<html>
<head>
<title>Egyszerű</title>
</head>
<body>
<p>
<?php                              //váltás, PHP kód következik  
  
$k = 3;  //egész
$x = 2.2; //valós
$s="abcdfeghi";  //sztring

//ciklus 1
$html="<ul>\n";
for ($i=1; $i<11; $i++){
   //itt kiegészíteni
}
$html="</ul>\n";
//echo $html; //lista

echo '<br>';

$a = 3;
$b = 2.3;

//intval() használata
//két valós összehasonlítására bizonyos tizedesig:
$szam1=3.56784567; $szam2 = 3.678965432;
if (intval($a * 10000) == intval($b * 10000)) {
   // echo "első 5 tizedes egyenlő"
}
//írjuk ki azokat a számokat amelyek 2 tizedesig egyenlőek a tömb első elemével
$tomb = [ 3.345, 3.4567, 3.34678, 3.33245, 3.23456, 3.3499999, ];
for ($i=0; $i < count($tomb); $i++)  {
    //itt kiegészíteni
}

//írjuk ki minden tömb elemre, milyen az adattípusa
$adat = [ 1, 3.2, 5, "ab", NULL, [1,2,3]];
for ($i=0; $i < count($adat); $i++)  {
    $type = gettype($adat[$i]);
    switch ($type){
        case 'integer':
            //itt kiegészíteni
        default: 
            //itt kiegészíteni  
    }    
}