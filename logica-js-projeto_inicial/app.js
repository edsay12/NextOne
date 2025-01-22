function geraNumeroSecreto() {
  return Math.floor(Math.random() * (10 - 1 + 1)) + 1;
}

function mensagem(msg) {
  return alert(msg);
}

mensagem("Bem vindo ao jogo do número secreto!");

const numeroSecreto = geraNumeroSecreto();

while (true) {
  const papiteUsuario = Number(prompt("Digite o seu número"));

  if (numeroSecreto === papiteUsuario) {
    break;
  } else {
    mensagem("Número incorreto!");
  }
}
