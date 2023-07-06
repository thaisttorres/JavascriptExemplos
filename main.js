function nao(){
    alert ("EBA CINEMINHA EM CASA HOJE")
    window.location.href = "https://www.youtube.com/watch?v=ZwJnyJBjH2Q"
}

function sim(t){
    const botao = t
    botao.style.position = 'absolute';
    botao.style.bottom = geraPosicao(10 , 90);
    botao.style.left = geraPosicao(10, 90);
}


function geraPosicao(min, max){
    return (Math.random() * (max - min) + min) + '%';
}