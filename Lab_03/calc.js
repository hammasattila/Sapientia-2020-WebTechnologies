//ezt nem szabad módosítani !!!!!!!!!!!!!!!!
function calc(elem)
{
    var x = parseInt(elem.innerHTML); //átalakítja egész számmá a HTML szöveget
    elem.innerHTML = muvelet(x, 1); //beírja az elem tartalmát
}


