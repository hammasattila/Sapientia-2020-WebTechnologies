<?php
// a)
$a = array('001' => 'Maros', '002' => 'Kolozs', '003' => 'Bihar', '004' => 'Hargita');
$html_element = "<select>\n";
foreach ($a as $key => $value) {
    $html_element = $html_element . "\t<option value=\"" . $value . "\"> " . $value . " </option>\n";
}
$html_element = $html_element . "</select>\n";
echo $html_element;

//b)
$html_element1 = "<table>\n";
foreach ($a as $key => $value) {
    $html_element1 = $html_element1 . "\t<tr>\n\t\t<td>" . $key . "</td>\n\t\t<td>" . $value . "</td>\n\t</tr>\n";
}
$html_element1 = $html_element1 . '</table>';
echo $html_element1;
