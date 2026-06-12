function mostrarSecao(id) {

  const secoes = document.querySelectorAll(".secao");

  secoes.forEach(secao => {
    secao.style.display = "none";
  });

  document.getElementById(id).style.display = "block";
}
