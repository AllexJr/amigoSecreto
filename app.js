//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
document.addEventListener("DOMContentLoaded", () => {
    let amigos = [];

    function adicionarAmigo() {
        let nomeInput = document.getElementById("amigo");
        let nome = nomeInput.value.trim();

        if (nome === "") {
            alert("Por favor, insira um nome.");
            return;
        }

        amigos.push(nome);
        nomeInput.value = "";
        atualizarLista();
    }

    function atualizarLista() {
        let lista = document.getElementById("listaAmigos");
        lista.innerHTML = "";

        amigos.forEach(nome => {
            let li = document.createElement("li");
            li.textContent = nome;
            lista.appendChild(li);
        });
    }

    function sortearAmigo() {
        if (amigos.length === 0) {
            alert("Adicione pelo menos um nome antes de sortear.");
            return;
        }

        let indiceSorteado = Math.floor(Math.random() * amigos.length);
        let amigoSorteado = amigos[indiceSorteado];
        let resultado = document.getElementById("resultado");
        resultado.innerHTML = `<li>Amigo Secreto: ${amigoSorteado}</li>`;
    }

    window.adicionarAmigo = adicionarAmigo;
    window.sortearAmigo = sortearAmigo;
});
