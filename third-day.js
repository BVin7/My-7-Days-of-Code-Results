let areaEscolhida;

function perguntaInicial() {
    areaEscolhida = prompt(`Qual área você deseja seguir? (Responda com o nome da área)\n 1- Front-End\n 2- Back-End`);

    if(areaEscolhida == "Front-End") {
        let escolhaEmFront = prompt(`O que deseja aprender no Front-End? (Responda com o número)\n 1- React\n 2- Vue`);
        opcaoEscolhida();
    } if(areaEscolhida == "Back-End") {
        let escolhaEmBack = prompt(`O que deseja aprender no Back-End? (Responda com o número)\n 1- C#\n 2- Java`);
        opcaoEscolhida();
    }
}

function opcaoEscolhida() {
    let proximoPasso = prompt(`Você deseja: (Responda com o número)\n 1- Continuar a se especializar na área selecionada\n 2- Expandir e se tornar Fullstack`);

    if(proximoPasso == 1) {
        alert(`Muito bem, então vamos para o próximo passo rumo a sua especialização na área ${areaEscolhida}!`);
        perguntaTecnologias();
    } if(proximoPasso == 2) {
        alert(`Legal! Vamos torná-lo um desenvolvedor Fullstack então!`);
        perguntaTecnologias();
    }
}

function perguntaTecnologias() {
    let listaDeTecnologias = [];
    let pergunta = prompt("Quais são as tecnologias que você gostaria de conhecer/se especializar? (Digite apenas uma por enquanto)");
    listaDeTecnologias.push(pergunta);
    let confirmacao = prompt("Deseja conhecer mais alguma? (Responda Sim ou Não)")
    while(confirmacao == "Sim") {
        pergunta = prompt("Quais são as tecnologias que você gostaria de conhecer/se especializar? (Digite apenas uma por enquanto)");
        listaDeTecnologias.push(pergunta);
        alert(`Tecnologia/Linguagem adicionada à sua lista de aprendizado!`);
        confirmacao = prompt("Deseja conhecer mais alguma? (Responda Sim ou Não)");
        if(confirmacao == "Não") {
            alert(`Essa é a sua lista de aprendizado final:\n ${listaDeTecnologias}`);
            break;
        }
    }
}

perguntaInicial();
