<?php


$polish_form = "1 2 + 3 * 3 2 + -";

$stack = array();

$new_array = explode(" ", $polish_form);

for ($i = 0; $i < count($new_array); ++$i) {
    if (is_numeric($new_array[$i])) {
        array_push($stack, $new_array[$i]);
    } else {
        switch ($new_array[$i]) {
            case "+":
                $b = array_pop($stack);
                $a = array_pop($stack);
                array_push($stack, $a + $b);
                break;
            case "-":
                $b = array_pop($stack);
                $a = array_pop($stack);
                array_push($stack, $a - $b);
                break;
            case "*":
                $b = array_pop($stack);
                $a = array_pop($stack);
                array_push($stack, $a * $b);
                break;
            case "/":
                $b = array_pop($stack);
                $a = array_pop($stack);
                array_push($stack, $a / $b);
                break;
        }
    }
}

echo $polish_form . " = " . $stack[0];
