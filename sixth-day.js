const frutas = [];
const legumes = [];
const graos = [];
const bebidas = [];
const frios = [];
const higiene = [];
const limpeza = [];

let item;
let gerenciandoItens;

alert("Olá, eu sou a sua lista de compras! Hora de me montar =D");

function gerenciaItens() {
    gerenciandoItens = prompt(`O que deseja fazer? (Responder com o número da opção)
        1- Adicionar itens na lista
        2- Remover itens da lista
        3- Sair e mostrar minha lista final (se houver uma)`
    );
}

function montarLista() {
    let escolhendoCategoria = prompt(`Temos as categorias:\n Frutas\n Legumes\n Grãos\n Bebidas\n Frios\n Higiene\n Limpeza\n Em qual categoria o item desejado se encaixa?`);
    switch (escolhendoCategoria) {
        case "Frutas":
            frutas.push(item);
            break;
        case "Legumes":
            legumes.push(item);
            break;
        case "Grãos":
            graos.push(item);
            break;
        case "Bebidas":
            bebidas.push(item);
            break;
        case "Frios":
            frios.push(item);
            break;
        case "Higiene":
            higiene.push(item);
            break;
        case "Limpeza":
            limpeza.push(item);
    }
    gerenciaItens();
}

function removerDaLista() {
    let escolheCategoria = prompt(`Esta é sua lista de compras:
            Frutas: ${frutas.join(", ")}
            Legumes: ${legumes.join(", ")}
            Grãos: ${graos.join(", ")}
            Bebidas: ${bebidas.join(", ")}
            Frios: ${frios.join(", ")}
            Higiene: ${higiene.join(", ")}
            Limpeza: ${limpeza.join(", ")}
            Em qual categoria está o item que deseja remover?`
    );

    let nomeDoItem = prompt ("Digite corretamente o nome do item a ser removido");
    let procuraItem;
    let removeItem;
    switch (escolheCategoria) {
        case "Frutas":
            procuraItem = frutas.includes(nomeDoItem);
            if (procuraItem === true) {
                removeItem = frutas.splice(procuraItem, 1);
            } else {
                alert("Não foi possível encontrar o item dentro da lista!");
            }
            break;
        case "Legumes":
            procuraItem = legumes.includes(nomeDoItem);
            if (procuraItem === true) {
                removeItem = legumes.splice(procuraItem, 1);
            } else {
                alert("Não foi possível encontrar o item dentro da lista!");
            }
            break;
        case "Grãos":
            procuraItem = graos.includes(nomeDoItem);
            if (procuraItem === true) {
                removeItem = graos.splice(procuraItem, 1);
            } else {
                alert("Não foi possível encontrar o item dentro da lista!");
            }
            break;
        case "Bebidas":
            procuraItem = bebidas.includes(nomeDoItem);
            if (procuraItem === true) {
                removeItem = bebidas.splice(procuraItem, 1);
            } else {
                alert("Não foi possível encontrar o item dentro da lista!");
            }
            break;
        case "Frios":
            procuraItem = frios.includes(nomeDoItem);
            if (procuraItem === true) {
                removeItem = frios.splice(procuraItem, 1);
            } else {
                alert("Não foi possível encontrar o item dentro da lista!");
            }
            break;
        case "Higiene":
            procuraItem = higiene.includes(nomeDoItem);
            if (procuraItem === true) {
                removeItem = higiene.splice(procuraItem, 1);
            } else {
                alert("Não foi possível encontrar o item dentro da lista!");
            }
            break;
        case "Limpeza":
            procuraItem = limpeza.includes(nomeDoItem);
            if (procuraItem === true) {
                removeItem = limpeza.splice(procuraItem, 1);
            } else {
                alert("Não foi possível encontrar o item dentro da lista!");
            }
    }
    mostrarLista();
    gerenciaItens();
}

function mostrarLista() {
    alert(`Esta é sua lista de compras:
            Frutas: ${frutas.join(", ")}
            Legumes: ${legumes.join(", ")}
            Grãos: ${graos.join(", ")}
            Bebidas: ${bebidas.join(", ")}
            Frios: ${frios.join(", ")}
            Higiene: ${higiene.join(", ")}
            Limpeza: ${limpeza.join(", ")}`
        );
}

gerenciaItens();

while (gerenciandoItens == "1" || gerenciandoItens == "2" && gerenciandoItens != "3") {
    if (gerenciandoItens == "1") {
        item = prompt("Digite o item da lista que voce quer adicionar");
        montarLista();
    } if (gerenciandoItens == "2") {
        removerDaLista();
    } if (gerenciandoItens == "3") {
        mostrarLista();
    }
}
