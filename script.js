document.addEventListener("DOMContentLoaded", function () {

  /* =========================
     🌙 MODO ESCURO / CLARO
  ========================= */

  const botaoTema = document.createElement("button");
  botaoTema.innerText = "🌙 Modo Escuro";
  botaoTema.style.position = "fixed";
  botaoTema.style.bottom = "20px";
  botaoTema.style.right = "20px";
  botaoTema.style.padding = "10px 15px";
  botaoTema.style.border = "none";
  botaoTema.style.borderRadius = "10px";
  botaoTema.style.cursor = "pointer";
  botaoTema.style.background = "#2e7d32";
  botaoTema.style.color = "white";
  botaoTema.style.zIndex = "9999";

  document.body.appendChild(botaoTema);

  let escuro = false;

  botaoTema.addEventListener("click", function () {
    escuro = !escuro;

    if (escuro) {
      document.body.style.background = "#121212";
      document.body.style.color = "white";
      botaoTema.innerText = "☀️ Modo Claro";
      document.querySelectorAll("section").forEach(sec => {
        sec.style.background = "#1e1e1e";
        sec.style.borderRadius = "10px";
        sec.style.padding = "20px";
      });
    } else {
      document.body.style.background = "#f4f7f5";
      document.body.style.color = "#1f2d1f";
      botaoTema.innerText = "🌙 Modo Escuro";
      document.querySelectorAll("section").forEach(sec => {
        sec.style.background = "transparent";
      });
    }
  });


  /* =========================
     🔝 BOTÃO VOLTAR AO TOPO
  ========================= */

  const topo = document.createElement("button");
  topo.innerText = "⬆ Topo";
  topo.style.position = "fixed";
  topo.style.bottom = "70px";
  topo.style.right = "20px";
  topo.style.padding = "10px 15px";
  topo.style.border = "none";
  topo.style.borderRadius = "10px";
  topo.style.cursor = "pointer";
  topo.style.background = "#1b5e20";
  topo.style.color = "white";
  topo.style.display = "none";
  topo.style.zIndex = "9999";

  document.body.appendChild(topo);

  window.addEventListener("scroll", function () {
    if (window.scrollY > 300) {
      topo.style.display = "block";
    } else {
      topo.style.display = "none";
    }
  });

  topo.addEventListener("click", function () {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });


  /* =========================
     ✨ ANIMAÇÃO AO ROLAR
  ========================= */

  const elementos = document.querySelectorAll("section");

  function mostrar() {
    const alturaTela = window.innerHeight;

    elementos.forEach(el => {
      const topo = el.getBoundingClientRect().top;

      if (topo < alturaTela - 100) {
        el.style.opacity = "1";
        el.style.transform = "translateY(0)";
        el.style.transition = "0.6s ease";
      } else {
        el.style.opacity = "0";
        el.style.transform = "translateY(40px)";
      }
    });
  }

  window.addEventListener("scroll", mostrar);
  mostrar();

});
