let listaDeNumerosSorteados = [];
let numeroLimite = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;


// manipulando textos de forma individual:

//  let titulo = document.querySelector('h1');
//  titulo.innerHTML = 'Jogo do Numero Secreto';

// o 'documente.query.Selector' seleciona uma propriedade dentro do HTML
//  let paragrafo = document.querySelector('p');
//  paragrafo.innerHTML = 'Escolha um numero entre 1 e 10';


// evite repetições de codigos com a funções, atribuindo PARAMETROS:
function exibirTextoNaTela (tag, texto)   {
        let campo = document.querySelector(tag);
        campo.innerHTML = texto;
        responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate: 1.2}); //corresponde a narrar o texto exibido na tela através do 'script' do HTML linha 7
    }

// função para exibir o nome do jogo
function exibirMensagemIncial () {
    exibirTextoNaTela ('h1', 'Jogo do Número Secreto');
    exibirTextoNaTela ('p', 'Escolha um número entre 1 e 10');
    }

exibirMensagemIncial();

// criar uma função significa, que um trecho do codigo é responsável por realizar determinada ação
function verificarChute ()   {
        let chute = document.querySelector('input').value;
        console.log(numeroSecreto);

        if (chute == numeroSecreto)  {
            exibirTextoNaTela('h1', 'Acertou');
            let palavraTentativa = tentativas > 1? 'tentativas' : 'tentativa';
            let mensagemTentativas = `Voce descobriu o numero secreto com ${tentativas} ${palavraTentativa}`;
            exibirTextoNaTela('p', mensagemTentativas);
            document.getElementById('reiniciar').removeAttribute('disabled'); // document.getElementsById para selecionar o ID do HTML
        } 
        
        else  {
            if (chute > numeroSecreto) {
                exibirTextoNaTela('p', 'O numero secreto é menor');
            } 
            
            else {
                exibirTextoNaTela('p', 'O numero secreto é maior');
            }

            tentativas++;
            limparCampo ();
        }
    };


// através do return, o numero aletorio gerado sera atribuido para a varivale numeroSecreto
function gerarNumeroAleatorio ()   {
    let numeroEscolhido = parseInt (Math.random () * numeroLimite + 1);
    let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;

    if (quantidadeDeElementosNaLista == numeroLimite) {
        listaDeNumerosSorteados = [];
    }



    if (listaDeNumerosSorteados.includes(numeroEscolhido)) {
            return gerarNumeroAleatorio ();
        } else {
            listaDeNumerosSorteados.push(numeroEscolhido);
            console.log(listaDeNumerosSorteados);
            return numeroEscolhido;
        }
    };

// função para limpar o input a cada tentativa errada
function limparCampo ()   {
    chute = document.querySelector('input');
    chute.value = ' ';
    }

//função para reinicar o jogo quando acertar o numero
function reiniciarJogo () {
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemIncial();
    document.getElementById('reiniciar').setAttribute('disabled', false); //setAttribute('disabled', true) para habilitar novamente o campo
}

