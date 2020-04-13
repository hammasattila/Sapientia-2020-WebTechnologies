window.onload = function (){

    var para = $("tarto").firstElementChild; //az első paragrafus referenciája
    para.insertAdjacentHTML("beforebegin", "<p>Első para</p>");
    para.insertAdjacentHTML("afterbegin", "<span class=\"szines\">Első span</span");
    para.insertAdjacentHTML("beforeend", "<span class=\"szines\">Második span</span>");
    para.insertAdjacentHTML("afterend", "<p>Második para</p>");

}