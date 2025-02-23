//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
// Adicionar nomes: Os usuários escreverão o nome de um amigo em um campo de texto e o adicionarão a uma lista visível ao clicar em "Adicionar".

// Validar entrada: Se o campo de texto estiver vazio, o programa exibirá um alerta solicitando um nome válido.

// Visualizar a lista: Os nomes inseridos aparecerão em uma lista abaixo do campo de entrada.

// Sorteio aleatório: Ao clicar no botão "Sortear Amigo", um nome da lista será selecionado aleatoriamente e exibido na página.

const input = document.getElementById("amigo");
const listaAmigos = document.getElementById("listaAmigos");
const resultado = document.getElementById("resultado");

function adicionarAmigo() {
  if (input.value.trim() === "") {
    alert("Adicione um nome válido.");
  } else {
    const item = document.createElement("li");
    item.innerHTML = input.value;
    listaAmigos.appendChild(item);
    input.value = "";
  }
}

function sortearAmigo() {
  const list = listaAmigos.children;
  const item = list[Math.floor(Math.random() * list.length)];
  resultado.innerHTML = item.innerHTML;
}
