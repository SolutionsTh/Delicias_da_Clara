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
    var quantidadeImagem = "12"
    document.getElementById("descricaoImagemGrande").src = "../Img/Main/" + cardapioNome + "/0001.jpg";

    document.getElementById("descricaoImagemGrande").className = "descricaoImagemGrande " + cardapioNome + "0001";
});


$("#botaoProximaImg").click(function(){
    /* var cardapioClasse = document.getElementById("descricaoImagemGrande").className;
    var cardapioNomeClasse = replace("descricaoImagemGrande ","").slice(cardapioClasse,-4); */
    /* var cardapioNnumeroClasse = replace("descricaoImagemGrande ","").slice(-4); */
    
    document.getElementById("descricaoImagemGrande").src = "../Img/Main/HomemAranha/0002.jpg";

});