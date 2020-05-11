<!DOCTYPE html>
<html lang="hu">
    <head>
        <title>PHP példák</title>
        <meta charset="utf-8">
 

    </head>

    <body>

        <?php
        
        $szoveg=file_get_contents('szoveg.txt');
        
        $re = '/[[:punct:][:space:]]+/' ; //elválasztó karakterek a punktuációs
          //karakterek halmaza: [:punct:] és a szóköz, tab.: [:space:]
    
        $szavak = preg_split($re,strtolower($szoveg));
        
        print_r($szavak);
        
       
       
        ?>
        
        
        
    </body>
</html>
