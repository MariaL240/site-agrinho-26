  // Aguarda toda a página carregar para ativar as funções
document.addEventListener("DOMContentLoaded", () => {
    console.log("Jornal do Agrinho carregado com sucesso!");
});

// Função corrigida para alternar entre as 3 páginas
function mudarPagina(idPagina, botaoClicado) {
    // 1. Esconde todas as seções de página
    const paginas = document.querySelectorAll('.pagina');
    paginas.forEach(pag => pag.classList.remove('active', 'ativa'));

    // 2. Remove o destaque visual de todos os botões do menu
    const botoes = document.querySelectorAll('.menu-lnk');
    botoes.forEach(btn => btn.classList.remove('ativo'));

    // 3. Mostra apenas a página que você escolheu
    const paginaAlvo = document.getElementById(idPagina);
    if (paginaAlvo) {
        paginaAlvo.classList.add('ativa');
    }

    // 4. Adiciona o destaque visual no botão que foi clicado
    if (botaoClicado) {
        botaoClicado.classList.add('ativo');
    }
}

// Função para exibir as dicas de sustentabilidade na tela
function gerarDica() {
    const ambienteSelecionado = document.getElementById('ambiente').value;
    const painelResultado = document.getElementById('resultado-dica');
    
    let dicaTexto = "";

    // Define o texto com base na escolha do usuário
    if (ambienteSelecionado === "casa") {
        dicaTexto = "💡 <b>Dica para Casa:</b> Desligue aparelhos da tomada quando não estiver em uso e separe o lixo orgânico do reciclável. Restos de alimentos podem virar adubo através da compostagem!";
    } else if (ambienteSelecionado === "escola") {
        dicaTexto = "💡 <b>Dica para Escola:</b> Evite o desperdício de papel utilizando a folha dos dois lados. Ajude a criar um mutirão da limpeza ou uma horta escolar com seus colegas!";
    } else if (ambienteSelecionado === "campo") {
        dicaTexto = "💡 <b>Dica para o Campo:</b> Pratique a rotação de culturas para manter o solo fértil e evite o uso excessivo de defensivos químicos, protegendo as abelhas e polinizadores.";
    }

    // Insere o texto na tela e torna o bloco visível
    painelResultado.innerHTML = dicaTexto;
    painelResultado.style.display = "block";
}
