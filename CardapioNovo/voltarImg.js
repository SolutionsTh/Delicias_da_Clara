$("#botaoVoltarImg").click(function(){
    var cardapioClasse = document.getElementById("descricaoImagemGrande").className.replace("descricaoImagemGrande ","");
    var cardapioClasseNome = cardapioClasse.slice(cardapioClasse,-4); 
    var cardapioClasseNumero = cardapioClasse.slice(-4);
    if (cardapioClasseNome = "HomemAranha" && cardapioClasseNumero == 1){
        document.getElementById("descricaoImagemGrande").src = "../Img/Main/" + cardapioClasse.slice(cardapioClasse,-4) + "/0012.jpg";
        document.getElementById("descricaoImagemGrande").className = "descricaoImagemGrande " + cardapioClasse.slice(cardapioClasse,-4) + "0012";
    }else{
        var imagemNumero = parseFloat(cardapioClasseNumero) - 1;        
        document.getElementById("descricaoImagemGrande").src = "../Img/Main/" + cardapioClasse.slice(cardapioClasse,-4) + "/" +  (("0000" + imagemNumero).slice(-4)) + ".jpg";
        document.getElementById("descricaoImagemGrande").className = "descricaoImagemGrande " + cardapioClasse.slice(cardapioClasse,-4) + (("0000" + imagemNumero).slice(-4));
    }
});