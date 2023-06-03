function abrirIframeImg(){
    document.getElementById('conteudoCardapio').className = 'conteudoCardapioNone';
}
function fecharIframeImg(){
    document.getElementById('conteudoCardapio').className = 'conteudoCardapio';
}
function botaoOverProxima(){
    document.getElementById('botaoProximaImg').innerHTML = 'keyboard_double_arrow_right';
}
function botaoOutProxima(){
    document.getElementById('botaoProximaImg').innerHTML = 'arrow_forward_ios';
}
function botaoOverVoltar(){
    document.getElementById('botaoVoltarImg').innerHTML = 'keyboard_double_arrow_left';
}
function botaoOutVoltar(){
    document.getElementById('botaoVoltarImg').innerHTML = 'arrow_back_ios';
}