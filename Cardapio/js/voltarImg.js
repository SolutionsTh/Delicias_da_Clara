/* setInterval(proximaImgIframeImg, 10000) */
function voltarImgIframeImg(){
    var cardapioNomes_01_ = ["", "HomemAranha", "Sonic"]
    var cardapioNomes_02_ = ["", "MasculinoAdulto", "Viking", "Natal"]

    var cardapioNumero_01_ = ["", "12", "6"]
    var cardapioNumero_02_ = ["", "2", "1", "3"]

    var cardapioClasse = document.getElementById("descricaoImagemGrande").className.replace("descricaoImagemGrande ","");
    var cardapioClasseNome = cardapioClasse.slice(cardapioClasse,-4); 
    var cardapioClasseNumero = cardapioClasse.slice(-4);
    
    if (cardapioClasseNome == cardapioNomes_01_[1] && cardapioClasseNumero <= 1){
        document.getElementById("linkDescricaoImagemGrande").href = "../Img/Main/" + cardapioClasse.slice(cardapioClasse,-4) + "/" + (("0000" + parseFloat(cardapioNumero_01_[1])).slice(-4)) + ".jpg";
        document.getElementById("descricaoImagemGrande").src = "../Img/Main/" + cardapioClasse.slice(cardapioClasse,-4) + "/" + (("0000" + parseFloat(cardapioNumero_01_[1])).slice(-4)) + ".jpg";
        document.getElementById("descricaoImagemGrande").className = "descricaoImagemGrande " + cardapioClasse.slice(cardapioClasse,-4) + (("0000" + parseFloat(cardapioNumero_01_[1])).slice(-4));        
        document.getElementById('conteudoImagempequena conteudoImagempequena' +  (("0000" + (parseFloat(cardapioNumero_01_[1]))).slice(-4))).style.background = "#000000";
        document.getElementById('conteudoImagempequena conteudoImagempequena0001').style.background = "#00000000";
    }
    else if (cardapioClasseNome == cardapioNomes_01_[2] && cardapioClasseNumero <= 1){
        document.getElementById("linkDescricaoImagemGrande").href = "../Img/Main/" + cardapioClasse.slice(cardapioClasse,-4) + "/" + (("0000" + parseFloat(cardapioNumero_01_[2])).slice(-4)) + ".jpg";
        document.getElementById("descricaoImagemGrande").src = "../Img/Main/" + cardapioClasse.slice(cardapioClasse,-4) + "/" + (("0000" + parseFloat(cardapioNumero_01_[2])).slice(-4)) + ".jpg";
        document.getElementById("descricaoImagemGrande").className = "descricaoImagemGrande " + cardapioClasse.slice(cardapioClasse,-4) + (("0000" + parseFloat(cardapioNumero_01_[2])).slice(-4));        
        document.getElementById('conteudoImagempequena conteudoImagempequena' +  (("0000" + (parseFloat(cardapioNumero_01_[2]))).slice(-4))).style.background = "#000000";
        document.getElementById('conteudoImagempequena conteudoImagempequena0001').style.background = "#00000000";
    }
    else if (cardapioClasseNome == cardapioNomes_02_[1] && cardapioClasseNumero <= 1){
        document.getElementById("linkDescricaoImagemGrande").href = "../Img/Main/" + cardapioClasse.slice(cardapioClasse,-4) + "/" + (("0000" + parseFloat(cardapioNumero_02_[1])).slice(-4)) + ".jpg";
        document.getElementById("descricaoImagemGrande").src = "../Img/Main/" + cardapioClasse.slice(cardapioClasse,-4) + "/" + (("0000" + parseFloat(cardapioNumero_02_[1])).slice(-4)) + ".jpg";
        document.getElementById("descricaoImagemGrande").className = "descricaoImagemGrande " + cardapioClasse.slice(cardapioClasse,-4) + (("0000" + parseFloat(cardapioNumero_02_[1])).slice(-4));        
        document.getElementById('conteudoImagempequena conteudoImagempequena' +  (("0000" + (parseFloat(cardapioNumero_02_[1]))).slice(-4))).style.background = "#000000";
        document.getElementById('conteudoImagempequena conteudoImagempequena0001').style.background = "#00000000";
    }
    else if (cardapioClasseNome == cardapioNomes_02_[2] && cardapioClasseNumero <= 1){
        document.getElementById("linkDescricaoImagemGrande").href = "../Img/Main/" + cardapioClasse.slice(cardapioClasse,-4) + "/" + (("0000" + parseFloat(cardapioNumero_02_[2])).slice(-4)) + ".jpg";
        document.getElementById("descricaoImagemGrande").src = "../Img/Main/" + cardapioClasse.slice(cardapioClasse,-4) + "/" + (("0000" + parseFloat(cardapioNumero_02_[2])).slice(-4)) + ".jpg";
        document.getElementById("descricaoImagemGrande").className = "descricaoImagemGrande " + cardapioClasse.slice(cardapioClasse,-4) + (("0000" + parseFloat(cardapioNumero_02_[2])).slice(-4));        
        document.getElementById('conteudoImagempequena conteudoImagempequena' +  (("0000" + (parseFloat(cardapioNumero_02_[2]))).slice(-4))).style.background = "#000000";
        document.getElementById('conteudoImagempequena conteudoImagempequena0001').style.background = "#00000000";
    }
    else if (cardapioClasseNome == cardapioNomes_02_[3] && cardapioClasseNumero <= 1){
        document.getElementById("linkDescricaoImagemGrande").href = "../Img/Main/" + cardapioClasse.slice(cardapioClasse,-4) + "/" + (("0000" + parseFloat(cardapioNumero_02_[3])).slice(-4)) + ".jpg";
        document.getElementById("descricaoImagemGrande").src = "../Img/Main/" + cardapioClasse.slice(cardapioClasse,-4) + "/" + (("0000" + parseFloat(cardapioNumero_02_[3])).slice(-4)) + ".jpg";
        document.getElementById("descricaoImagemGrande").className = "descricaoImagemGrande " + cardapioClasse.slice(cardapioClasse,-4) + (("0000" + parseFloat(cardapioNumero_02_[3])).slice(-4));        
        document.getElementById('conteudoImagempequena conteudoImagempequena' +  (("0000" + (parseFloat(cardapioNumero_02_[3]))).slice(-4))).style.background = "#000000";
        document.getElementById('conteudoImagempequena conteudoImagempequena0001').style.background = "#00000000";
    }
    
    else{
        document.getElementById("linkDescricaoImagemGrande").href = "../Img/Main/" + cardapioClasse.slice(cardapioClasse,-4) + "/" +  (("0000" + (parseFloat(cardapioClasseNumero) - 1)).slice(-4)) + ".jpg";
        document.getElementById("descricaoImagemGrande").src = "../Img/Main/" + cardapioClasse.slice(cardapioClasse,-4) + "/" +  (("0000" + (parseFloat(cardapioClasseNumero) - 1)).slice(-4)) + ".jpg";
        document.getElementById("descricaoImagemGrande").className = "descricaoImagemGrande " + cardapioClasse.slice(cardapioClasse,-4) + (("0000" + (parseFloat(cardapioClasseNumero) - 1)).slice(-4));        
        document.getElementById('conteudoImagempequena conteudoImagempequena' +  (("0000" + (parseFloat(cardapioClasseNumero))).slice(-4))).style.background = "#00000000";
        document.getElementById('conteudoImagempequena conteudoImagempequena' +  (("0000" + (parseFloat(cardapioClasseNumero) - 1)).slice(-4))).style.background = "#000000";
    }
};