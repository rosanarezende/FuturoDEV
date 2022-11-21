function cumprimentarUsuario(event) {
  // Previne o comportamento padrão do evento, de recarregar a página
  event.preventDefault();

  // Pega o valor do input
  var nome = document.querySelector("#nome").value;

  // Exibe alerta na tela
  window.alert("Olá " + nome + "!");

  // Insere conteúdo no documento
  // var resultado = document.querySelector("#resultado");
  // resultado.innerHTML = "Olá " + nome + "!"
}
