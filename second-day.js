let nomeUsuario = prompt("Qual é o seu nome?");
let idadeUsuario = prompt("Quantos anos você tem? (Número)");
let linguagemUsuario = prompt("Qual linguagem de programação você está estudando?");

alert(`Olá ${nomeUsuario}, você tem ${idadeUsuario} anos e já está aprendendo ${linguagemUsuario}!`);

let pergunta = prompt(`Você gosta de estudar ${linguagemUsuario}? (Responder com o número)\n 1-Sim\n 2-Não`);

if(pergunta == 1) {
    alert("Muito Bem! Continue estudando e você terá muito sucesso!");
} else {
    alert("Ahh, que pena... Já tentou aprender outras linguagens?");
}
