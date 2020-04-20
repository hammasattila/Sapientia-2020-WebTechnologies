//ide jön a feladat megoldása

let szoveg_szavak = [];

function number_char(text)
{
    return text.length;
}

function number_row(text)
{
    return text.split('\n').length;
}

function number_word(text)
{
    text = text.replace(/[-.,:;'"„”!()\[{}\]]/g,'');
    text = text.replace(/\n/g,' ');
    text = text.replace(/\t/g,' ');
    text = text.replace(/ $/g, ''); 
    text = text.split(' ');
    for (var elem of text)
    {
        if (elem != '')
        {
            szoveg_szavak.push(elem.toLowerCase());
        }
    }
    return szoveg_szavak.length;
}

function check_elem(elem,tomb)
{
    for(var e of tomb)
    {
        if (elem == e[0])
        {
            e[1] += 1;
            return true;
        }
    }
    return false;
}

function satat_word()
{
    var tomb = [];
    var count = Number($("szoszam").value);
    for (var elem of szoveg_szavak)
    {
        if(!check_elem(elem,tomb))
        {
            tomb.push([elem,1]);
        }
    }
    tomb.sort(function(a, b) {
        return  b[1]-a[1];
    });
    var text = '';
    var index = 1;
    for(var elem of tomb)
    {
        text = text + elem[0] + '(' + elem[1] + ') ';
        if (index == count)
        {
            break;
        }
        index += 1;
    }
    var text1 = '<p id="gyak">Gyakori szavak: '+ text + '</p>'
    $("gyak").innerHTML = text1;
}

function to_filter_out()
{
    new_szavak = [];
    for(var elem of szoveg_szavak)
    {
        if(stop[elem] == undefined)
        {
            new_szavak.push(elem)
        }
    }
    return new_szavak;
}

function satat_word_non()
{
    var tomb = [];
    var count = Number($("szoszam").value);
    new_szavak = to_filter_out()
    for (var elem of new_szavak)
    {
        if(!check_elem(elem,tomb))
        {
            tomb.push([elem,1]);
        }
    }
    tomb.sort(function(a, b) {
        return  b[1]-a[1];
    });
    var text = '';
    var index = 1;
    for(var elem of tomb)
    {
        text = text + elem[0] + '(' + elem[1] + ') ';
        if (index == count)
        {
            break;
        }
        index += 1;
    }
    var text1 = '<p id="gyak">Gyakori szavak: '+ text + '</p>'
    $("gyak").innerHTML = text1;
}

function stati()
{
    szoveg_szavak = []
    var bal_form = $("textf");
    var text = bal_form.message.value;
    num_char = number_char(text);
    num_row = number_row(text);
    num_word = number_word(text);
    satat_word()
    text = '<li>Karakterek száma: '+ num_char +'</li><li>Sorok száma: '+ num_row +'</li><li>Szavak száma: '+ num_word +'</li>'
    $("statlist").innerHTML = text;
}

window.onload = function myFunction() {
    $("stopcheck").addEventListener('change',(event) => {
        if ($("stopcheck").checked)
        {
            this.satat_word_non()
        }
        if (!$("stopcheck").checked)
        {
            this.satat_word()
        }
        
    })

    $("stat").addEventListener('click',(event) => {
        this.stati()
    })
}