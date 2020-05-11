<?php

//betölti a $konyvek tömböt
include 'tomb6_konyvek.php';

//visszaad egy könyvlistát HTML táblázatban
function html_lista($klista) {

    $s = "<table>
<tr>
<th>Sorszám</th><th>ISBN</th><th>Szerző</th><th>Cím</th><th>Kiadó</th><th>Megjelenés</th>
</tr>";

    foreach ($klista as $no => $konyv) {
        $s .= "<tr><td>$no</td>";
        foreach ($konyv as $k => $v) {
            $s .= "<td>" . $v . "</td>";
        }
        $s.= "</tr>";
    }

    $s .= "</table>";
    
    return $s;
}

   
        
echo html_lista($konyvek);
 

?>

