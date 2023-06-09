$("#vejaMais01_01").click(function(){
    var cardapioNome = "HomemAranha"
    document.getElementById("descricaoImagemGrande").src = "../Img/Main/" + cardapioNome + "/0001.jpg";
    document.getElementById("descricaoImagemGrande").className = "descricaoImagemGrande " + cardapioNome + "0001";



    var local = document.getElementsByClassName("descricaoImagemPequena");

    var th = document.getElementById("descricaoImagemPequena");

    var i;
    for (i=0; i< local.length; i++)
    local[i].src = th.replace(th.slice(11).slice(th,-9),"HomemAranha");





});





$("#vejaMais01_02").click(function(){
    var cardapioNome = "Sonic"
    document.getElementById("descricaoImagemGrande").src = "../Img/Main/" + cardapioNome + "/0001.jpg";
    document.getElementById("descricaoImagemGrande").className = "descricaoImagemGrande " + cardapioNome + "0001";
});
$("#botaoProximaImg").click(function(){
    var cardapioClasse = document.getElementById("descricaoImagemGrande").className.replace("descricaoImagemGrande ","");
    var cardapioClasseNome = cardapioClasse.slice(cardapioClasse,-4); 
    var cardapioClasseNumero = cardapioClasse.slice(-4);
    if (cardapioClasseNome = "HomemAranha" && cardapioClasseNumero < 12){
        var imagemNumero = parseFloat(cardapioClasseNumero) + 1;        
        document.getElementById("descricaoImagemGrande").src = "../Img/Main/" + cardapioClasse.slice(cardapioClasse,-4) + "/" +  (("0000" + imagemNumero).slice(-4)) + ".jpg";
        document.getElementById("descricaoImagemGrande").className = "descricaoImagemGrande " + cardapioClasse.slice(cardapioClasse,-4) + (("0000" + imagemNumero).slice(-4));
    }else{
        document.getElementById("descricaoImagemGrande").src = "../Img/Main/" + cardapioClasse.slice(cardapioClasse,-4) + "/0001.jpg";
        document.getElementById("descricaoImagemGrande").className = "descricaoImagemGrande " + cardapioClasse.slice(cardapioClasse,-4) + "0001"
    }
    if (cardapioClasseNome = "Sonic" && cardapioClasseNumero < 6){
        var imagemNumero = parseFloat(cardapioClasseNumero) + 1;        
        document.getElementById("descricaoImagemGrande").src = "../Img/Main/" + cardapioClasse.slice(cardapioClasse,-4) + "/" +  (("0000" + imagemNumero).slice(-4)) + ".jpg";
        document.getElementById("descricaoImagemGrande").className = "descricaoImagemGrande " + cardapioClasse.slice(cardapioClasse,-4) + (("0000" + imagemNumero).slice(-4));
    }else{
        document.getElementById("descricaoImagemGrande").src = "../Img/Main/" + cardapioClasse.slice(cardapioClasse,-4) + "/0001.jpg";
        document.getElementById("descricaoImagemGrande").className = "descricaoImagemGrande " + cardapioClasse.slice(cardapioClasse,-4) + "0001"
    }
});