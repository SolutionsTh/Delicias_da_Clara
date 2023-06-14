function abrirIframeImg(){
    document.getElementById('conteudoCardapio').className = 'conteudoCardapioNone';
    document.getElementById('vejaMais').className = 'vejaMais';

}
function fecharIframeImg(){
    document.getElementById('vejaMais').className = 'vejaMaisNone';
    document.getElementById('conteudoCardapio').className = 'conteudoCardapio';
    location.reload(true);
}
function botaoOverProxima(){
    document.getElementById('botaoProximaImagem').innerHTML = 'keyboard_double_arrow_right';
}
function botaoOutProxima(){
    document.getElementById('botaoProximaImagem').innerHTML = 'arrow_forward_ios';
}
function botaoOverVoltar(){
    document.getElementById('botaoVoltarImagem').innerHTML = 'keyboard_double_arrow_right';
}
function botaoOutVoltar(){
    document.getElementById('botaoVoltarImagem').innerHTML = 'arrow_forward_ios';
}

setInterval(backgroundImagemPequena, 1000)
function backgroundImagemPequena(){
    var linkImagemGrande = document.getElementById('descricaoImagemGrande').src;
    var linkImagemPequena = document.getElementById('descricaoImagemPequena').src;

    if(linkImagemPequena == linkImagemGrande){
        document.getElementById('conteudoImagempequena conteudoImagempequena0001').style.background = "#000000"
    }
}