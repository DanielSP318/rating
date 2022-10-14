var body = document.querySelector("body");
var mainScreen = document.querySelector(".main-screen");
var secundaryScreen = document.querySelector(".secundary-screen");
var button = document.querySelector(".btn-enviar");
var listaOrdenada = document.querySelector("ol");
var resposta = document.querySelector(".resposta");

habilitarDesabilitarBotao(true);

button.addEventListener("click", trocarDeTela);
listaOrdenada.addEventListener("click", validaBotao);
body.addEventListener("click", desativaEnviar);

function habilitarDesabilitarBotao(estado) {
    button.disabled = estado;
}

function trocarDeTela() {
    secundaryScreen.classList.remove("escondido");
    mainScreen.classList.add("escondido");
}

function pegaClique(clique) {
    return clique.target;
}

function validaBotao(botao) {
    if (pegaClique(botao).localName == "button") {
        var textoBtn = pegaClique(botao).textContent;
        resposta.textContent = textoBtn;
        habilitarDesabilitarBotao(false);
    }
}

function desativaEnviar(clique) {
    if (pegaClique(clique).localName != "button") {
        habilitarDesabilitarBotao(true);
    }
}
