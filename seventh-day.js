//VARIÁVEIS
const tela = document.getElementById('tela__principal');
const operacaoAtual = document.getElementById('tela__operacao');
let telaArmazenadores = document.getElementById('tela__armazenadores');

const botoes = Array.from(document.getElementsByClassName('calculadora__botao'));

let armazenador = '';
let armazenadorDois = '';
let resultado;

//FUNÇÕES
function limparTudo() {
    tela.innerText = '';
    armazenador = '';
    armazenadorDois = '';
    operacaoAtual.innerText = 'Operação:';
    telaArmazenadores.innerText = '0'
}

function limparAnterior() {
    if(tela.innerText) {
        tela.innerText = tela.innerText.slice(0, -1);
    }
}

function igual() {
    if(operacaoAtual.innerText == 'Adição:') {
        armazenadorDois += tela.innerText;
        telaArmazenadores.innerText += armazenadorDois;
        tela.innerText = '';
        resultado = parseFloat(armazenador) + parseFloat(armazenadorDois);
        tela.innerText += resultado;
        armazenador = '';
        armazenadorDois = '';

    } else if(operacaoAtual.innerText == 'Subtração:') {
        armazenadorDois += tela.innerText;
        telaArmazenadores.innerText += armazenadorDois;
        tela.innerText = '';
        resultado = parseFloat(armazenador) - parseFloat(armazenadorDois);
        tela.innerText += resultado;
        armazenador = '';
        armazenadorDois = '';

    } else if(operacaoAtual.innerText == 'Multiplicação:') {
        armazenadorDois += tela.innerText;
        telaArmazenadores.innerText += armazenadorDois;
        tela.innerText = '';
        resultado = parseFloat(armazenador) * parseFloat(armazenadorDois);
        tela.innerText += resultado;
        armazenador = '';
        armazenadorDois = '';
        
    } else if(operacaoAtual.innerText == 'Divisão:') {
        armazenadorDois += tela.innerText;
        telaArmazenadores.innerText += armazenadorDois;
        tela.innerText = '';
        resultado = parseFloat(armazenador) / parseFloat(armazenadorDois);
        tela.innerText += resultado;
        armazenador = '';
        armazenadorDois = '';
    }
}

function adicao() {
    operacaoAtual.innerText = 'Adição:';
    telaArmazenadores.innerText = ''
    armazenador += tela.innerText;
    telaArmazenadores.innerText += armazenador + "+";
    tela.innerText = '';
}

function subtracao() {
    operacaoAtual.innerText = 'Subtração:';
    telaArmazenadores.innerText = ''
    armazenador += tela.innerText;
    telaArmazenadores.innerText += armazenador + "-";
    tela.innerText = '';
}

function multiplicacao() {
    operacaoAtual.innerText = 'Multiplicação:';
    telaArmazenadores.innerText = ''
    armazenador += tela.innerText;
    telaArmazenadores.innerText += armazenador + "*";
    tela.innerText = '';
}

function divisao() {
    operacaoAtual.innerText = 'Divisão:';
    telaArmazenadores.innerText = ''
    armazenador += tela.innerText;
    telaArmazenadores.innerText += armazenador + "/";
    tela.innerText = '';
}

//EVENTO
botoes.map(botao => {
    botao.addEventListener('click', (evento) => {
        /*
        console.log("clicado");
        console.log(evento);
        console.log(evento.target);
        console.log(evento.target.innerText);
        */
        switch (evento.target.innerText) {
            case '+':
                adicao();
                break;
                
            case '-':
                subtracao();
                break;

            case '*':
                multiplicacao();
                break;

            case '/':
                divisao();
                break;

            case '=':
                igual();
                break;
                
            case 'C':
                limparTudo();
                break;

            case '←':
                limparAnterior();
                break;

            default:
                tela.innerText += evento.target.innerText;
        }
    })
})
