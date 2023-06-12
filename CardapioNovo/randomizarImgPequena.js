$("#vejaMais01_01").click(function(){
    var cardapioNome = "HomemAranha"
    document.getElementById("descricaoImagemGrande").src = "../Img/Main/" + cardapioNome + "/0001.jpg";
    document.getElementById("descricaoImagemGrande").className = "descricaoImagemGrande " + cardapioNome + "0001";

    var local = document.getElementsByClassName("descricaoImagemPequena");
    var i;
    var numeroInicial = 1
    for (i=0; i< local.length; i++)
    local[i].src= "../Img/Main/" + cardapioNome + "/" + (("0000" + numeroInicial++).slice(-4)) + ".jpg";
});



$("#vejaMais01_02").click(function(){
    var cardapioNome = "Sonic"
    document.getElementById("descricaoImagemGrande").src = "../Img/Main/" + cardapioNome + "/0001.jpg";
    document.getElementById("descricaoImagemGrande").className = "descricaoImagemGrande " + cardapioNome + "0001";

    var local = document.getElementsByClassName("descricaoImagemPequena");
    var i;
    var numeroInicial = 1
    for (i=0; i< local.length; i++)
    local[i].src= "../Img/Main/" + cardapioNome + "/" + (("0000" + numeroInicial++).slice(-4)) + ".jpg";
});