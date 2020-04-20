//színek a változtokhoz
var valtozatok = {
    red: {
        Crimson: "#DC143C",
        IndianRed: "#CD5C5C",
        LightCoral: "#F08080"
    },
    blue: {
        DarkCyan: "#008B8B",
        DeepSkyBlue: "#00BFFF",
        LightSkyBlue: "#87CEFA"
    },
    green: {
        ForestGreen: "#228B22",
        LightGreen: "#90EE90",
        SeaGreen: "#2E8B57"
    }
}


window.onload = function () {
    $("szinek").addEventListener("change",(event) => {
        color = valtozatok[$("szinek").value]
        var text = '';
        for (var elem in color)
        {
            text = text + '<option value="'+elem+'" selected>'+elem+'</option>'
        }
        text = text + '<option value="valaszt" selected>Változatok</option>';
        $("valtozat").innerHTML = text;
    },true);
    $("valtozat").addEventListener("change", (event) => {
        if($("valtozat").value == 'valaszt')
        {
            $("szin").value = "#ffffff";
        }
        else
        {
            colors = valtozatok[$("szinek").value];
            color = colors[$("valtozat").value];
            $("szin").value = color;
        }
        
    },true);
}