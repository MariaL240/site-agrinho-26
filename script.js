function mostrarSecao(id) {

  const secoes = document.querySelectorAll(".secao");

  secoes.forEach(secao => {
    secao.style.display = "none";
  });

  const ativa = document.getElementById(id);

  if (ativa) {
    ativa.style.display = "block";
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
}
function mostrarSecao(id) {

  const secoes = document.querySelectorAll(".secao");

  secoes.forEach(secao => {
    secao.style.display = "none";
  });

  document.getElementById(id).style.display = "block";
}
