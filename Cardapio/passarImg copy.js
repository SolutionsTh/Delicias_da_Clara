/* document.getElementById('vejaMaisHomemAranha').onclick = function() {
    cardapioNome = 'HomemAranha'
};


function iframeImg() {
    document.getElementById('vejaMais').innerHTML = '';

} */

/* function VerMais(){  
    var cardapioImagemIcone_02_03 = document.getElementById("cardapioImagemIcone_02_03").className.replace("cardapioImagemIcone img","");
    if (cardapioImagemIcone_02_03 < 3){
        setTimeout(function() {
            var img = parseFloat(cardapioImagemIcone_02_03) + 1;
            document.getElementById("cardapioImagemIcone_02_03").src = "../Img/Main/Natal/" + (("0000" + img).slice(-4)) + ".jpg";
            document.getElementById("cardapioImagemIcone_02_03").className = "cardapioImagemIcone img" + img;
        });
    }
    else{
        document.getElementById("cardapioImagemIcone_02_03").src = "../Img/Main/Natal/0001.jpg";
        document.getElementById("cardapioImagemIcone_02_03").className = "cardapioImagemIcone img1";
    }
} */

$("#vejaMais01_01").click(function(){
    var cardapioNome = "HomemAranha"
    /* var quantidadeImagem = "12" */
    document.getElementById("descricaoImagemGrande").src = "../Img/Main/" + cardapioNome + "/0001.jpg";

    document.getElementById("descricaoImagemGrande").className = "descricaoImagemGrande " + cardapioNome + "0001";
});


$("#botaoProximaImg").click(function(){
    var cardapioClasse = document.getElementById("descricaoImagemGrande").className.replace("descricaoImagemGrande ","");

    var cardapioClasseNome = cardapioClasse.slice(cardapioClasse,-4); 
    var cardapioClasseNumero = cardapioClasse.slice(-4);
    
    
    if (cardapioClasseNome = "HomemAranha" && cardapioClasseNumero < 12){
        var cardapioClasseNome = cardapioClasse.slice(cardapioClasse,-4);
        var imagemNumero = parseFloat(cardapioClasseNumero) + 1;
        
        document.getElementById("descricaoImagemGrande").src = "../Img/Main/" + cardapioClasseNome + "/" +  (("0000" + imagemNumero).slice(-4)) + ".jpg";

        document.getElementById("descricaoImagemGrande").className = "descricaoImagemGrande " + cardapioClasseNome + (("0000" + imagemNumero).slice(-4));
    }
    else{
        document.getElementById("descricaoImagemGrande").src = "../Img/Main/" + cardapioClasseNome +"/0001.jpg";
    }

});