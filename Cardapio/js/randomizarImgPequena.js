var cardapioNomes_01_ = ["", "HomemAranha", "Sonic"]
var cardapioNomes_02_ = ["", "MasculinoAdulto", "Viking", "Natal"]

var local = document.getElementsByClassName("descricaoImagemPequena");
var i;
var numeroInicial = 1

$("#vejaMais01_01").click(function(){
    var num = "01_01"
    document.getElementById("descricaoImagemGrande").src = "../Img/Main/" + cardapioNomes_01_[num.slice(-1)] + "/0001.jpg";
    document.getElementById("descricaoImagemGrande").className = "descricaoImagemGrande " + cardapioNomes_01_[num.slice(-1)] + "0001";
    for (i=0; i< local.length; i++)
    local[i].src= "../Img/Main/" + cardapioNomes_01_[num.slice(-1)] + "/" + (("0000" + numeroInicial++).slice(-4)) + ".jpg";
});
$("#vejaMais01_02").click(function(){
    var num = "01_02"
    document.getElementById("descricaoImagemGrande").src = "../Img/Main/" + cardapioNomes_01_[num.slice(-1)] + "/0001.jpg";
    document.getElementById("descricaoImagemGrande").className = "descricaoImagemGrande " + cardapioNomes_01_[num.slice(-1)] + "0001";
    for (i=0; i< local.length; i++)
    local[i].src= "../Img/Main/" + cardapioNomes_01_[num.slice(-1)] + "/" + (("0000" + numeroInicial++).slice(-4)) + ".jpg";
});
$("#vejaMais02_01").click(function(){
    var num = "02_01"
    document.getElementById("descricaoImagemGrande").src = "../Img/Main/" + cardapioNomes_02_[num.slice(-1)] + "/0001.jpg";
    document.getElementById("descricaoImagemGrande").className = "descricaoImagemGrande " + cardapioNomes_02_[num.slice(-1)] + "0001";
    for (i=0; i< local.length; i++)
    local[i].src= "../Img/Main/" + cardapioNomes_02_[num.slice(-1)] + "/" + (("0000" + numeroInicial++).slice(-4)) + ".jpg";
});
$("#vejaMais02_02").click(function(){
    var num = "02_02"
    document.getElementById("descricaoImagemGrande").src = "../Img/Main/" + cardapioNomes_02_[num.slice(-1)] + "/0001.jpg";
    document.getElementById("descricaoImagemGrande").className = "descricaoImagemGrande " + cardapioNomes_02_[num.slice(-1)] + "0001";
    for (i=0; i< local.length; i++)
    local[i].src= "../Img/Main/" + cardapioNomes_02_[num.slice(-1)] + "/" + (("0000" + numeroInicial++).slice(-4)) + ".jpg";
});
$("#vejaMais02_03").click(function(){
    var num = "02_03"
    document.getElementById("descricaoImagemGrande").src = "../Img/Main/" + cardapioNomes_02_[num.slice(-1)] + "/0001.jpg";
    document.getElementById("descricaoImagemGrande").className = "descricaoImagemGrande " + cardapioNomes_02_[num.slice(-1)] + "0001";
    for (i=0; i< local.length; i++)
    local[i].src= "../Img/Main/" + cardapioNomes_02_[num.slice(-1)] + "/" + (("0000" + numeroInicial++).slice(-4)) + ".jpg";
});