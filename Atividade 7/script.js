

function esolha_user(){
    const pedra_user = document.getElementById('pedra');
    const papel_user = document.getElementById('papel');
    const tesoura_user = document.getElementById('tesoura');

    let jogadorEscolha = "";
    
    pedra.addEventListener('click', function() {
        jogadorEscolha = 'pedra';
        jogar(jogadorEscolha);
    });
    
    papel.addEventListener('click', function() {
        jogadorEscolha = 'papel'
        jogar(jogadorEscolha);
    });
    
    tesoura.addEventListener('click', function() {
        jogadorEscolha = 'tesoura'
        jogar(jogadorEscolha);
    });


}


function escolha_computador(){
    let aux = Math.random()
    let escolha_pc = "";


    if (aux < 0.33) {
        escolha_pc = 'pedra';
    } else if (aux < 0.66) {
        escolha_pc = 'papel';
    } else {
        escolha_pc = 'tesoura';
    }
    return escolha_pc
}

function jogar(jogadorEscolha) {
    let escolha_pc = escolha_computador();
    let resultado = "";
    let frase = "";

    console.log(`Você escolheu: ${jogadorEscolha}`);
    console.log(`O computador escolheu: ${escolha_pc}`);

    if (jogadorEscolha === escolha_pc) {
        frase = `Você escolheu: ${jogadorEscolha}   |   Computador escolheu: ${escolha_pc}`
        resultado = "Empate!";
    } else if (
        (jogadorEscolha === 'pedra' && escolha_pc === 'tesoura') ||
        (jogadorEscolha === 'papel' && escolha_pc === 'pedra') ||
        (jogadorEscolha === 'tesoura' && escolha_pc === 'papel')
    ) {
        frase = `Você escolheu: ${jogadorEscolha}   |   Computador escolheu: ${escolha_pc}`
        resultado= `Voce Ganhou!`;
    } else {
        frase = `Você escolheu: ${jogadorEscolha}   |   Computador escolheu: ${escolha_pc}`
        resultado = `Voce Perdeu!`;
    }

    document.getElementById('exampleFormControlTextarea2').value = resultado;
    document.getElementById('exampleFormControlTextarea1').value = frase;

}

esolha_user();
