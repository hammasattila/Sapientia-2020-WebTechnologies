//kereső függvény
//minden csomópontot bejár
function scan(node) {
    if (!node.nodeType){
        console.error("rossz bemenet");
        return;
    }
    switch (node.nodeType)
    {
    case 1: //HTML elem
        let ch = node.childNodes;
        for (let i = 0; i < ch.length; i++) {
            console.log(ch[i].nodeName);
            console.count("element");//hányadszor jár itt
            if (ch[i]!==null){
                scan(ch[i]);
            } 
        }
        break;
    case 3: //text csomópont
        console.log(node.nodeName);
        console.count("text")
        console.log(node.textContent)
        break;
    default:
        console.log("Más csomópont", node.nodeType);    
    }
    return;
}

//keres a szöveges csomópontok tartalmaiban
//vissza node referencia ha talál
//logikai false ha nem talál
function searchText(node, str) {
    if (!node.nodeType){
        console.error("rossz bemenet");
        return;
    }
    if (node.nodeType == 1) { //ha elem
        let ch = node.childNodes;
        for (let i = 0; i < ch.length; i++) {
            let node = null;
            if (node = searchText(ch[i], str)) {
                return node;
            }
        }
    } else {
        if (node.textContent) {
            console.log(node.textContent);
            if (node.textContent.indexOf(str) != -1) {
                return node;
            }
        }
    }
    return false;
}

window.onload = function () {
    scan(document.body);//minden csomópontot bejár

    //visszaadja annak az első csomópontnak a referenciáját
    //amelyben megvan a Lorem szöveg
    var lorem = searchText(document.body, "Lorem");
}