setInterval(numImg, 3000)

function numImg() {
    var cardapioImagemIcone_01_01 = document.getElementById("cardapioImagemIcone_01_01").className.replace("cardapioImagemIcone img","");
    if (cardapioImagemIcone_01_01 < 12){
        setTimeout(function() {
            var imagemNumero = parseFloat(cardapioImagemIcone_01_01) + 1;
            document.getElementById("cardapioImagemIcone_01_01").src = "../Img/Main/HomemAranha/" + (("0000" + imagemNumero).slice(-4)) + ".jpg";
            document.getElementById("cardapioImagemIcone_01_01").className = "cardapioImagemIcone img" + imagemNumero;
        });
    }
    else{
        document.getElementById("cardapioImagemIcone_01_01").src = "../Img/Main/HomemAranha/0001.jpg";
        document.getElementById("cardapioImagemIcone_01_01").className = "cardapioImagemIcone img1";
    }

    /*  */    
    var cardapioImagemIcone_01_02 = document.getElementById("cardapioImagemIcone_01_02").className.replace("cardapioImagemIcone img","");
    if (cardapioImagemIcone_01_02 < 6){
        setTimeout(function() {
            var imagemNumero = parseFloat(cardapioImagemIcone_01_02) + 1;
            document.getElementById("cardapioImagemIcone_01_02").src = "../Img/Main/Sonic/" + (("0000" + imagemNumero).slice(-4)) + ".jpg";
            document.getElementById("cardapioImagemIcone_01_02").className = "cardapioImagemIcone img" + imagemNumero;
        });
    }
    else{
        document.getElementById("cardapioImagemIcone_01_02").src = "../Img/Main/Sonic/0001.jpg";
        document.getElementById("cardapioImagemIcone_01_02").className = "cardapioImagemIcone img1";
    }

    /*  */    
    var cardapioImagemIcone_02_01 = document.getElementById("cardapioImagemIcone_02_01").className.replace("cardapioImagemIcone img","");
    if (cardapioImagemIcone_02_01 < 2){
        setTimeout(function() {
            var imagemNumero = parseFloat(cardapioImagemIcone_02_01) + 1;
            document.getElementById("cardapioImagemIcone_02_01").src = "../Img/Main/MasculinoAdulto/" + (("0000" + imagemNumero).slice(-4)) + ".jpg";
            document.getElementById("cardapioImagemIcone_02_01").className = "cardapioImagemIcone img" + imagemNumero;
        });
    }
    else{
        document.getElementById("cardapioImagemIcone_02_01").src = "../Img/Main/MasculinoAdulto/0001.jpg";
        document.getElementById("cardapioImagemIcone_02_01").className = "cardapioImagemIcone img1";
    }

    /*  */    
    var cardapioImagemIcone_02_02 = document.getElementById("cardapioImagemIcone_02_02").className.replace("cardapioImagemIcone img","");
    if (cardapioImagemIcone_02_02 < 1){
        setTimeout(function() {
            var imagemNumero = parseFloat(cardapioImagemIcone_02_02) + 1;
            document.getElementById("cardapioImagemIcone_02_02").src = "../Img/Main/Viking/" + (("0000" + imagemNumero).slice(-4)) + ".jpg";
            document.getElementById("cardapioImagemIcone_02_02").className = "cardapioImagemIcone img" + imagemNumero;
        });
    }
    else{
        document.getElementById("cardapioImagemIcone_02_02").src = "../Img/Main/Viking/0001.jpg";
        document.getElementById("cardapioImagemIcone_02_02").className = "cardapioImagemIcone img1";
    }

    /*  */    
    var cardapioImagemIcone_02_03 = document.getElementById("cardapioImagemIcone_02_03").className.replace("cardapioImagemIcone img","");
    if (cardapioImagemIcone_02_03 < 3){
        setTimeout(function() {
            var imagemNumero = parseFloat(cardapioImagemIcone_02_03) + 1;
            document.getElementById("cardapioImagemIcone_02_03").src = "../Img/Main/Natal/" + (("0000" + imagemNumero).slice(-4)) + ".jpg";
            document.getElementById("cardapioImagemIcone_02_03").className = "cardapioImagemIcone img" + imagemNumero;
        });
    }
    else{
        document.getElementById("cardapioImagemIcone_02_03").src = "../Img/Main/Natal/0001.jpg";
        document.getElementById("cardapioImagemIcone_02_03").className = "cardapioImagemIcone img1";
    }
}