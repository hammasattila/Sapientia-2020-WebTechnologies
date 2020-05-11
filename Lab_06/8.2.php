<?php
// 1
$list = array(1 => 12.5,  996 => 18.3, 567 => 11.00,  9899 => 14.5, 0002 => 33.5);
$percent = 22;
foreach ($list as $key => $value) {
    $value = $value + ($value * $percent) / 100;
    $list[$key] = $value;
}

print_r($list);

// 2.1
$list1 = array(1 => 12.5,  996 => 18.3, 567 => 11.00,  9899 => 14.5, 0002 => 33.5);

function f0($list, $percent)
{
    foreach ($list as $key => $value) {
        $value = $value + ($value * $percent) / 100;
        $list[$key] = $value;
    }
    return $list;
}

print_r(f0($list1, 22));

// 2.2
$list = array(1 => 12.5,  996 => 18.3, 567 => 11.00,  9899 => 14.5, 0002 => 33.5);
function f1(&$list, $percent)
{
    foreach ($list as $key => $value) {
        $value = $value + ($value * $percent) / 100;
        $list[$key] = $value;
    }
}

f1($list, 22);
print_r($list);

// 3
function f2($list)
{
    return $list[max(array_keys($list))];
}

echo f2($list);

// 4)
$list = array(1 => 12.5,  996 => 18.3, 567 => 11.00,  9899 => 14.5, 0002 => 33.5);
sort($list);
print_r($list);

$list = array(1 => 12.5,  996 => 18.3, 567 => 11.00,  9899 => 14.5, 0002 => 33.5);
asort($list);
print_r($list);
