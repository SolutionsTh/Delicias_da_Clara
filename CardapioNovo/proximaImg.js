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
        document.getElementById("descricaoImagemGrande").className = "descricaoImagemGrande " + cardapioClasse.slice(cardapioClasse,-4) + "0001";
    }
    if (cardapioClasseNome = "Sonic" && cardapioClasseNumero < 6){
        var imagemNumero = parseFloat(cardapioClasseNumero) + 1;        
        document.getElementById("descricaoImagemGrande").src = "../Img/Main/" + cardapioClasse.slice(cardapioClasse,-4) + "/" +  (("0000" + imagemNumero).slice(-4)) + ".jpg";
        document.getElementById("descricaoImagemGrande").className = "descricaoImagemGrande " + cardapioClasse.slice(cardapioClasse,-4) + (("0000" + imagemNumero).slice(-4));
    }else{
        document.getElementById("descricaoImagemGrande").src = "../Img/Main/" + cardapioClasse.slice(cardapioClasse,-4) + "/0001.jpg";
        document.getElementById("descricaoImagemGrande").className = "descricaoImagemGrande " + cardapioClasse.slice(cardapioClasse,-4) + "0001";
    }
});