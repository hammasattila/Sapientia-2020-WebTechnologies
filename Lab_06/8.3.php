<?php
include 'tomb6_konyvek.php';

function format_list($list)
{

    $s = "<table>\n\t<tr>\n\t\t<th>Sorszám</th>\n\t\t<th>ISBN</th>\n\t\t<th>Szerző</th>\n\t\t<th>Cím</th>\n\t\t<th>Kiadó</th>\n\t\t<th>Megjelenés</th>\n\t</tr>";

    foreach ($list as $isbn => $konyv) {
        $s .= "\t<tr>\n\t\t<td>$isbn</td>\n";
        foreach ($konyv as $k => $v) {
            $s .= "\t\t<td>$v</td>\n";
        }
        $s .= "\t</tr>\n";
    }

    $s .= "</table>\n\n\n";

    return $s;
}

// 1
$books = $konyvek;

usort($books, function ($a, $b) {
    if ($a['price'] == $b['price']) {
        return 0;
    }
    return $a['price'] > $b['price'] ? -1 : 1;
});
echo format_list($books);

// 2
$books_fragment = $books;
array_splice($books_fragment, 0, -10);

usort($books_fragment, function ($a, $b) {
    if ($a['price'] == $b['price']) {
        return 0;
    }

    return $a['price'] < $b['price'] ? -1 : 1;
});
echo format_list($books_fragment);

// 3
$books_filtered = array_filter($books, function ($book) {
    $name = $book["author"];
    $name = explode(" ", $name);
    foreach ($name as $elem) {
        if ($elem == "Gyöngyvér") {
            return $book;
        }
    }
});
echo format_list($books_filtered);

// 4)
$books_isbn = array();

$books_isbn = array_map(function ($book) {
    if ($book['pub_date'] < 2007) {
        return [$book['isbn'], $book['price'] / 2];
    }
    return [$book['isbn'], $book['price']];
}, $konyvek);
print_r($books_isbn);

// 5)
$authors = array_reduce($konyvek, function ($acum, $k) {
    $author = $k['author'];
    if (strpos($author, ",")) {
        $szk = explode(",", trim($author));
    } else {
        $szk = [trim($author)];
    }
    return  array_merge($acum, $szk);
}, []);
$authors = array_unique($authors);
$html_element = "<select>\n";
foreach ($authors as $elem) {
    $html_element .= "\t<option value=\"$elem\">$elem</option>\n";
}
$html_element .= "</select>\n";
echo $html_element;
