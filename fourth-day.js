let numeroEscolhido = Math.floor((Math.random() * 10) +1);
let numeroChutado;
console.log(numeroEscolhido);

function advinhaNumero() {
    numeroChutado = prompt("Que número eu estou escondendo?");
}

alert("Olá! Eu sou um programa e fui criado pra brincar de advinhação com você!");
alert("Você terá 3 chances de advinhar que número entre 1 a 10 eu estou escondendo. Preparado? Boa sorte! =D");

for(let i = 0; i < 3; i++) {
    advinhaNumero();
    if(numeroChutado == numeroEscolhido) {
        alert("Parabéns, você acertou! Tá pegando fogo bixo!!!");
        break;
    } if(numeroChutado != numeroEscolhido) {
        alert("ERROOOOOUUU!!!");
    }
}
