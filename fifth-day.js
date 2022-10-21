const frutas = [];
const legumes = [];
const graos = [];
const bebidas = [];
const frios = [];
const higiene = [];
const limpeza = [];

let item;
let adicionandoItens;

alert("Olá, eu sou a sua lista de compras! Hora de me montar =D");
adicionaItens();

function adicionaItens() {
    adicionandoItens = prompt("Deseja adicionar algo à sua lista de compras? (Responder com Sim ou Não");
}

while(adicionandoItens == "Sim" && adicionandoItens != "Não") {
    if (adicionandoItens == "Sim") {
        item = prompt("Digite o item da lista que voce quer inserir");
        montarLista();
    } if (adicionandoItens == "Não") {
        alert(`Esta é sua lista de compras:
                Frutas: ${frutas.join(", ")}
                Legumes: ${legumes.join(", ")}
                Grãos: ${graos.join(", ")}
                Bebidas: ${bebidas.join(", ")}
                Frios: ${frios.join(", ")}
                Higiene: ${higiene.join(", ")}
                Limpeza: ${limpeza.join(", ")}`);
    }
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
    adicionaItens();
}
